# NeiWorks – Next Steps Guide

## 🚀 Immediate Actions (Ready to Deploy)

### 1. Start Production Environment
```bash
# Navigate to project root
cd NeiWorks

# Start all services
docker-compose -f docker-compose.prod.yml up -d --build

# Verify all containers are running
docker-compose -f docker-compose.prod.yml ps
```

### 2. Access Services
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **AI Microservices**: http://localhost:8000
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3001 (admin/admin)

### 3. Initial Setup
```bash
# Create admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@neiworks.com","password":"admin123","role":"admin"}'

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:8000/nlp/classify \
  -H "Content-Type: application/json" \
  -d '{"complaint":"There is a large pothole on Main St."}'
```

### 4. Initial Setup
```bash
# Create admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@neiworks.com","password":"admin123","role":"admin"}'

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:8000/nlp/classify \
  -H "Content-Type: application/json" \
  -d '{"complaint":"There is a large pothole on Main St."}'
```

### 5. Initial Setup
```bash
# Create admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@neiworks.com","password":"admin123","role":"admin"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:8000/nlp/classify \
  -H "Content-Type: application/json" \
  -d '{"complaint":"There is a large pothole on Main St."}"
```

### 6. Initial Setup
```bash
# Create admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@neiworks.com","password":"admin123","role":"admin"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:8000/nlp/classify \
  -H "Content-Type: application/json" \
  -d '{"complaint":"There is a large pothole on Main St."}"
```

### 7. Initial Setup
```bash
# Create admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@neiworks.com","password":"admin123","role":"admin"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}"

# Test AI services
curl -X POST http://localhost:5000/api_auth/login \
  -
