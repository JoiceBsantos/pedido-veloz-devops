# Diagramas da Arquitetura

## Arquitetura Geral

A arquitetura do projeto é baseada em microsserviços utilizando:

- API Gateway
- Serviços independentes
- PostgreSQL
- Kubernetes
- Observabilidade

---

## Fluxo da Aplicação

Cliente → API Gateway → Microsserviços → Banco de Dados

---

## Microsserviços

- Pedidos Service
- Pagamentos Service
- Estoque Service

---

## Kubernetes

A infraestrutura Kubernetes será composta por:

- Deployments
- Services
- ConfigMaps
- Pods
- Namespace

---

## Observabilidade

A observabilidade será realizada utilizando:

- Prometheus
- Grafana

---

## CI/CD

A automação da pipeline utiliza GitHub Actions.