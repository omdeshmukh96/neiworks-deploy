# NeiWorks – System Architecture

## 🏗️ High-Level Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        WEB[React Web App]
        MOBILE[Flutter Mobile App]
    end
    
    subgraph "API Gateway"
        NGINX[Nginx Reverse Proxy]
        LB[Load Balancer]
    end
    
    subgraph "Application Layer"
        BACKEND[Node.js Backend]
        AUTH[Authentication Service]
        REPORTS[Reports Service]
        NOTIFICATIONS[Notifications Service]
    end
    
    subgraph "AI Microservices"
        NLP[NLP Service]
        CV[Computer Vision Service]
        PRIORITY[Priority Engine]
    end
    
    subgraph "Data Layer"
        POSTGRES[(PostgreSQL)]
        REDIS[(Redis Cache)]
        S3[S3 Storage]
    end
    
    subgraph "Monitoring"
        PROMETHEUS[Prometheus]
        GRAFANA[Grafana]
        ALERTMANAGER[Alert Manager]
    end
    
    WEB --> NGINX
    MOBILE --> NGINX
    NGINX --> LB
    LB --> BACKEND
    BACKEND --> AUTH
    BACKEND --> REPORTS
    BACKEND --> NOTIFICATIONS
    BACKEND --> NLP
    BACKEND --> CV
    BACKEND --> PRIORITY
    BACKEND --> POSTGRES
    BACKEND --> REDIS
    BACKEND --> S3
    POSTGRES --> PROMETHEUS
    BACKEND --> PROMETHEUS
    PROMETHEUS --> GRAFANA
    PROMETHEUS --> ALERTMANAGER
```

## 🔍 Service Dependencies

### Frontend Services
- **React Web App**: Depends on Backend API
- **Flutter Mobile App**: Depends on Backend API + Offline Storage

### Backend Services
- **Authentication Service**: PostgreSQL, Redis
- **Reports Service**: PostgreSQL, S3, AI Microservices
- **Notifications Service**: PostgreSQL, Redis, External APIs

### AI Microservices
- **NLP Service**: Python, TensorFlow, PostgreSQL
- **Computer Vision**: Python, OpenCV, S3
- **Priority Engine**: PostgreSQL, Redis

### Infrastructure Services
- **PostgreSQL**: Primary database
- **Redis**: Caching & session storage
- **S3**: File storage (images, documents)
- **Prometheus**: Metrics collection
- **Grafana**: Visualization & alerting

## 📊 Data Flow Diagram

```mermaid
sequenceDiagram
    participant User
    participant Web/Mobile
    participant API
    participant Auth
    participant Database
    participant AI
    participant Storage
    
    User->>Web/Mobile: Submit Report
    Web/Mobile->>API: POST /api/reports
    API->>Auth: Validate Token
    Auth-->>API: Token Valid
    API->>Database: Store Report
    API->>AI: Process with AI
    AI->>Database: Update Report
    API->>Storage: Upload Images
    API->>User: Return Report ID
```

## 🔐 Security Architecture

### Authentication Flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant AuthService
    participant Database
    
    User->>Frontend: Login Credentials
    Frontend->>API: POST /api/auth/login
    API->>AuthService: Validate Credentials
    AuthService->>Database: Check User
    Database-->>AuthService: User Data
    AuthService-->>API: JWT Token
    API-->>Frontend: Token + User Data
    Frontend->>Frontend: Store Token
```

### Authorization Flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant AuthService
    
    User->>Frontend: Request Protected Resource
    Frontend->>API: Request + JWT Token
    API->>AuthService: Validate Token
    AuthService-->>API: Token Valid + Roles
    API->>API: Check Permissions
    API-->>Frontend: Resource Data
```

## 🗄️ Database Schema

### Core Tables
```sql
-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Reports table
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    priority INTEGER DEFAULT 1,
    status VARCHAR(20) DEFAULT 'pending',
    location GEOGRAPHY(POINT, 4326),
    images JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- AI processing results
CREATE TABLE ai_results (
    id SERIAL PRIMARY KEY,
    report_id INTEGER REFERENCES reports(id),
    service VARCHAR(50),
    result JSONB,
    confidence FLOAT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Deployment Architecture

### Local Development
```yaml
# docker-compose.yml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://neiworks:password@postgres:5432/neiworks
    depends_on:
      - postgres
      - redis
  
  postgres:
    image: postgres:13
    environment:
      - POSTGRES_DB=neiworks
      - POSTGRES_USER=neiworks
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
```

### Production Kubernetes
```yaml
# k8s/backend-deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: neiworks-backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: neiworks-backend
  template:
    metadata:
      labels:
        app: neiworks-backend
    spec:
      containers:
      - name: backend
        image: neiworks/backend:latest
        ports:
        - containerPort: 5000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-secret
              key: url
```

## 📈 Monitoring Architecture

### Metrics Collection
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'neiworks-backend'
    static_configs:
      - targets: ['backend:5000']
  
  - job_name: 'neiworks-ai'
    static_configs:
      - targets: ['ai-microservices:8000']
  
  - job_name: 'postgres'
    static_configs:
      - targets: ['postgres:5432']
```

### Alert Rules
```yaml
# alert-rules.yml
groups:
  - name: neiworks-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 5m
        annotations:
          summary: "High error rate detected"
      
      - alert: DatabaseDown
        expr: up{job="postgres"} == 0
        for: 1m
        annotations:
          summary: "PostgreSQL database is down"
```

## 🔧 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: |
          docker-compose run backend npm test
          docker-compose run ai-microservices python -m pytest
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to AWS
        run: |
          aws ecs update-service --cluster neiworks-prod --service neiworks-backend --force-new-deployment
```

## 🌐 CDN & Caching Strategy

### CloudFront Configuration
```json
{
  "Origins": [
    {
      "DomainName": "neiworks-frontend.s3.amazonaws.com",
      "OriginPath": "/static"
    }
  ],
  "CacheBehaviors": [
    {
      "PathPattern": "/api/*",
      "TargetOriginId": "backend",
      "CachePolicyId": "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    }
  ]
}
```

## 📊 Performance Optimization

### Database Optimization
```sql
-- Indexes for common queries
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_location ON reports USING GIST(location);
CREATE INDEX idx_reports_created_at ON reports(created_at);

-- Partitioning for large tables
CREATE TABLE reports_2024 PARTITION OF reports
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

### Caching Strategy
```yaml
# redis-config.yml
maxmemory: 1gb
maxmemory-policy: allkeys-lru
save: 900 1
save: 300 10
save: 60 10000
```

## 🚨 Disaster Recovery

### Backup Strategy
```bash
# Database backup
pg_dump -h localhost -U neiworks neiworks_prod > backup_$(date +%Y%m%d).sql

# S3 backup sync
aws s3 sync /app/uploads s3://neiworks-backups/uploads/
```

### Recovery Procedures
```bash
# Database restore
psql -h localhost -U neiworks neiworks_prod < backup_20240101.sql

# Service recovery
kubectl rollout restart deployment/neiworks-backend
```

## 📞 Support & Maintenance

### Monitoring URLs
- **Grafana**: https://monitoring.neiworks.com
- **Prometheus**: https://prometheus.neiworks.com
- **Alert Manager**: https://alerts.neiworks.com

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
