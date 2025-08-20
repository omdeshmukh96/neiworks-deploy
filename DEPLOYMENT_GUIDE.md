# NeiWorks – Production Deployment Guide

## 🚀 Quick Start (Local Production)

### Prerequisites
- Docker & Docker Compose installed
- Git configured
- 8GB+ RAM available

### 1. Clone & Setup
```bash
git clone <repository-url>
cd NeiWorks
cp .env.prod.example .env.prod
# Edit .env.prod with real values
```

### 2. Deploy Locally
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### 3. Verify Deployment
```bash
# Check all services
docker-compose ps

# Test endpoints
curl http://localhost:5000/health
curl http://localhost:8000/health
```

## ☁️ AWS Production Deployment

### 1. Infrastructure Setup
```bash
# Install AWS CLI
aws configure

# Create VPC and subnets
aws cloudformation create-stack \
  --stack-name neiworks-infrastructure \
  --template-body file://aws/cloudformation/infrastructure.yml

# Create RDS PostgreSQL
aws rds create-db-instance \
  --db-instance-identifier neiworks-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username neiworks \
  --master-user-password <secure-password> \
  --allocated-storage 20
```

### 2. ECS Cluster Setup
```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name neiworks-prod

# Register task definitions
aws ecs register-task-definition --cli-input-json file://aws/ecs/backend-task.json
aws ecs register-task-definition --cli-input-json file://aws/ecs/ai-microservices-task.json
aws ecs register-task-definition --cli-input-json file://aws/ecs/frontend-task.json

# Create services
aws ecs create-service \
  --cluster neiworks-prod \
  --service-name neiworks-backend \
  --task-definition neiworks-backend:1 \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-12345],securityGroups=[sg-12345],assignPublicIp=ENABLED}"
```

### 3. Load Balancer & Auto-scaling
```bash
# Create ALB
aws elbv2 create-load-balancer \
  --name neiworks-alb \
  --subnets subnet-12345 subnet-67890 \
  --security-groups sg-12345

# Create target groups
aws elbv2 create-target-group \
  --name neiworks-backend-tg \
  --protocol HTTP \
  --port 5000 \
  --vpc-id vpc-12345 \
  --target-type ip

# Create auto-scaling
aws application-autoscaling register-scalable-target \
  --service-namespace ecs \
  --resource-id service/neiworks-prod/neiworks-backend \
  --scalable-dimension ecs:service:DesiredCount \
  --min-capacity 2 \
  --max-capacity 10
```

## 🔧 Google Cloud Platform (GCP)

### 1. Setup Project
```bash
gcloud config set project YOUR_PROJECT_ID
gcloud services enable containerregistry.googleapis.com
gcloud services enable cloudsql.googleapis.com
```

### 2. Cloud SQL Setup
```bash
# Create PostgreSQL instance
gcloud sql instances create neiworks-db \
  --database-version POSTGRES_13 \
  --tier db-f1-micro \
  --region us-central1 \
  --storage-size 20GB

# Create database
gcloud sql databases create neiworks_prod --instance=neiworks-db
```

### 3. Cloud Run Deployment
```bash
# Build and push images
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neiworks-backend ./backend
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neiworks-ai ./ai_microservices
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neiworks-frontend ./frontend

# Deploy services
gcloud run deploy neiworks-backend \
  --image gcr.io/YOUR_PROJECT_ID/neiworks-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

gcloud run deploy neiworks-ai \
  --image gcr.io/YOUR_PROJECT_ID/neiworks-ai \
  --platform managed \
  --region us-central1
```

## 🐳 Kubernetes Deployment

### 1. Cluster Setup
```bash
# Create cluster
eksctl create cluster --name neiworks-prod --region us-west-2 --nodes 3

# Or using GKE
gcloud container clusters create neiworks-prod \
  --num-nodes=3 \
  --machine-type=n1-standard-2 \
  --region=us-central1
```

### 2. Deploy with Helm
```bash
# Install Helm charts
helm repo add neiworks https://neiworks.github.io/helm-charts
helm install neiworks-platform neiworks/neiworks-platform \
  --set database.host=your-db-host \
  --set database.password=your-db-password
```

## 📊 Monitoring & Alerting

### 1. Prometheus & Grafana Setup
```bash
# Install Prometheus Operator
kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/master/bundle.yaml

# Deploy monitoring stack
kubectl apply -f k8s/monitoring/
```

### 2. Alert Rules
```yaml
# Example alert rule
groups:
  - name: neiworks-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 5m
        annotations:
          summary: "High error rate detected"
```

## 🔐 Security Checklist

### 1. SSL/TLS Certificates
```bash
# Using Let's Encrypt
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.8.0/cert-manager.yaml
```

### 2. Secrets Management
```bash
# AWS Secrets Manager
aws secretsmanager create-secret \
  --name neiworks/database-credentials \
  --secret-string '{"username":"neiworks","password":"secure-password"}'

# GCP Secret Manager
gcloud secrets create neiworks-db-password --data-file=password.txt
```

### 3. Network Security
- Configure VPC firewalls
- Set up security groups
- Enable audit logging
- Implement rate limiting

## 🔄 CI/CD Pipeline

### 1. GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to AWS
        run: |
          aws ecs update-service --cluster neiworks-prod --service neiworks-backend --force-new-deployment
```

### 2. GitLab CI/CD
```yaml
# .gitlab-ci.yml
deploy:
  stage: deploy
  script:
    - kubectl apply -f k8s/
  only:
    - main
```

## 📈 Load Testing

### 1. Using Locust
```bash
# Install Locust
pip install locust

# Run load tests
locust -f tests/load_test.py --host=https://api.neiworks.com
```

### 2. Using Artillery
```bash
# Install Artillery
npm install -g artillery

# Run tests
artillery run tests/artillery.yml
```

## 🚨 Rollback Procedures

### 1. Docker Rollback
```bash
# Rollback to previous version
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --force-recreate
```

### 2. Kubernetes Rollback
```bash
# Rollback deployment
kubectl rollout undo deployment/neiworks-backend
kubectl rollout status deployment/neiworks-backend
```

### 3. Database Rollback
```bash
# Restore from backup
aws rds restore-db-instance-from-db-snapshot \
  --db-instance-identifier neiworks-db-restore \
  --db-snapshot-identifier neiworks-backup-20240101
```

## 📞 Support & Troubleshooting

### Common Issues
1. **Container crashes**: Check logs with `kubectl logs` or `docker logs`
2. **Database connection**: Verify security groups and VPC settings
3. **SSL certificate**: Ensure DNS is properly configured
4. **Performance**: Monitor with Grafana dashboards

### Emergency Contacts
- **DevOps Team**: devops@neiworks.com
- **On-call**: +1-800-NEIWORKS
- **Status Page**: https://status.neiworks.com

## 🎯 Next Steps After Deployment
1. Configure DNS and SSL certificates
2. Set up monitoring alerts
3. Schedule regular backups
4. Plan capacity scaling
5. Conduct security audit
6. Train operations team
