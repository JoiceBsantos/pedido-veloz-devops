# 🚀 Pedido Veloz DevOps

> Projeto desenvolvido para a disciplina de Cloud DevOps, com foco em conteinerização, microsserviços, Kubernetes, CI/CD, observabilidade e infraestrutura como código. O desafio acadêmico consistia em modernizar uma aplicação distribuída utilizando práticas cloud-native e DevOps modernas. 

Projeto acadêmico cloud-native baseado em arquitetura de microsserviços utilizando Docker, Kubernetes, Terraform e observabilidade.

---

# 📄 Relatório Técnico

O relatório técnico completo do projeto está disponível no arquivo:

📎 `Relatorio_Tecnico_Pedido_Veloz_DevOps_Joice_Barbosa_Santos.pdf`

O documento contém:

* arquitetura cloud-native
* Docker Compose
* Kubernetes
* microsserviços
* observabilidade
* Terraform
* CI/CD
* evidências práticas da execução

---

# 📋 Sumário

* [Sobre o Projeto](#-sobre-o-projeto)
* [Arquitetura](#-arquitetura)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura de Pastas](#-estrutura-de-pastas)
* [Pré-requisitos](#-pré-requisitos)
* [Como Clonar o Projeto](#-como-clonar-o-projeto)
* [Executando com Docker Compose](#-executando-com-docker-compose)
* [Executando Kubernetes](#-executando-kubernetes)
* [Terraform](#-terraform)
* [Observabilidade](#-observabilidade)
* [Microsserviços](#-microsserviços)
* [Evidências do Projeto](#-evidências-do-projeto)
* [Pipeline CI/CD](#-pipeline-cicd)
* [Escalabilidade](#-escalabilidade)
* [Segurança](#-segurança)
* [Autores](#-autores)

---

# 📌 Sobre o Projeto

Este projeto foi desenvolvido seguindo as orientações da disciplina de Cloud DevOps, cujo objetivo era implementar uma plataforma de pedidos baseada em microsserviços utilizando Docker Compose, Kubernetes, CI/CD, observabilidade e Terraform. 

A proposta acadêmica exigia a construção de uma arquitetura cloud-native capaz de:

* reduzir riscos de deploy
* permitir escalabilidade
* automatizar entregas
* implementar observabilidade
* padronizar ambientes
* utilizar infraestrutura como código
* aplicar práticas modernas de DevOps e Kubernetes

O trabalho contemplou conceitos apresentados nas unidades da disciplina, incluindo:

* Containers e Docker
* Docker Compose
* Kubernetes
* ConfigMaps e Secrets
* HPA (Horizontal Pod Autoscaler)
* Terraform
* GitHub Actions CI/CD
* Observabilidade com Prometheus e Grafana
* Arquitetura baseada em microsserviços

---

# 🎯 Objetivo Acadêmico

O projeto teve como objetivo demonstrar domínio prático em DevOps moderno aplicado a ambientes cloud-native, integrando:

* Conteinerização com Docker
* Orquestração Kubernetes
* Microsserviços
* Pipeline CI/CD
* Escalabilidade
* Observabilidade
* Segurança
* Infraestrutura como código

A solução implementada segue o cenário proposto no desafio da disciplina, simulando uma empresa de e-commerce chamada “Loja Veloz”, que precisava modernizar sua plataforma para suportar crescimento, escalabilidade e confiabilidade operacional.

O projeto Pedido Veloz foi desenvolvido com foco em arquitetura cloud-native e práticas DevOps modernas.

A aplicação utiliza microsserviços independentes conteinerizados com Docker, orquestrados com Kubernetes e automatizados através de CI/CD utilizando GitHub Actions.

O objetivo do projeto é demonstrar:

* Conteinerização
* Microsserviços
* Orquestração Kubernetes
* Infraestrutura como Código
* Escalabilidade
* Observabilidade
* Pipeline CI/CD
* Arquitetura distribuída

---

# 🏗 Arquitetura

A arquitetura do sistema é composta por:

* API Gateway
* pedidos-service
* pagamentos-service
* estoque-service
* PostgreSQL
* Docker
* Kubernetes
* Terraform
* Prometheus
* Grafana
* GitHub Actions

Fluxo da arquitetura:

```txt
Cliente → API Gateway → Microsserviços → PostgreSQL
```

---

# 🛠 Tecnologias Utilizadas

| Tecnologia     | Finalidade                 |
| -------------- | -------------------------- |
| Node.js        | Backend dos microsserviços |
| Docker         | Conteinerização            |
| Docker Compose | Orquestração local         |
| Kubernetes     | Orquestração cloud-native  |
| Terraform      | Infraestrutura como código |
| GitHub Actions | Pipeline CI/CD             |
| PostgreSQL     | Banco de dados             |
| Prometheus     | Monitoramento              |
| Grafana        | Dashboards                 |
| Git            | Versionamento              |
| VS Code        | Desenvolvimento            |

---

# 📁 Estrutura de Pastas

```txt
pedido-veloz-devops/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── api-gateway/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .dockerignore
│
├── pedidos-service/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .dockerignore
│
├── pagamentos-service/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .dockerignore
│
├── estoque-service/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .dockerignore
│
├── k8s/
│   ├── gateway-deployment.yaml
│   ├── gateway-service.yaml
│   ├── pedidos-deployment.yaml
│   ├── pedidos-service.yaml
│   ├── pedidos-hpa.yaml
│   ├── pagamentos-deployment.yaml
│   ├── pagamentos-service.yaml
│   ├── estoque-deployment.yaml
│   ├── estoque-service.yaml
│   ├── postgres-secret.yaml
│   └── security.md
│
├── observability/
│   ├── prometheus.yml
│   ├── grafana.md
│   └── observability.md
│
├── terraform/
│   ├── main.tf
│   ├── provider.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars
│
├── docs/
│   ├── arquitetura.md
│   ├── devops.md
│   ├── diagramas.md
│   ├── docker-compose.md
│   ├── fluxo-aplicacao.md
│   ├── microsservicos.md
│   ├── video-pitch.md
│   ├── arquitetura-cloud-native-pedido-veloz.pdf
│   └── imagens/
│       ├── api-gateway-online.png
│       ├── docker-compose-running.png
│       ├── docker-ps-running.png
│       ├── estoque-service-online.png
|       ├── grafana-dashboard-metrics.png
│       ├── kubernetes-deployments-services.png
│       ├── kubernetes-get-all.png
│       ├── kubernetes-running.png
│       ├── pagamentos-service-online.png
│       └── pedidos-service-online.png
|       └── prometheus.running.png
│
├── docker-compose.yml
├── README.md
└── LICENSE
```

---

# 💻 Pré-requisitos

Antes de executar o projeto, instale:

## Obrigatórios

* Git
* Docker Desktop
* Kubernetes (habilitado no Docker Desktop)
* VS Code

---

# 🔽 Instalações Necessárias

## Docker Desktop

Download:

[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

Durante a instalação:

* Habilite WSL2
* Reinicie o computador após instalação

---

## Kubernetes

No Docker Desktop:

```txt
Settings → Kubernetes → Enable Kubernetes
```

Depois clique em:

```txt
Apply & Restart
```

---

# 📥 Como Clonar o Projeto

Abra o Git Bash:

```bash
cd /c/Cloud-DevOps
```

Clone o repositório:

```bash
git clone https://github.com/JoiceBsantos/pedido-veloz-devops.git
```

Entre no projeto:

```bash
cd pedido-veloz-devops
```

Abra no VS Code:

```bash
code .
```

---

# 🐳 Executando com Docker Compose

## Construir e subir containers

```bash
docker compose up --build
```

---

## Verificar containers ativos

```bash
docker ps
```

---

## Parar containers

```bash
docker compose down
```

---

# 🌐 Serviços Disponíveis

| Serviço            | Porta |
| ------------------ | ----- |
| API Gateway        | 3000  |
| pedidos-service    | 3001  |
| pagamentos-service | 3002  |
| estoque-service    | 3003  |
| PostgreSQL         | 5432  |

---

# 🔗 Endpoints Locais

## API Gateway

```txt
http://localhost:3000
```

---

## pedidos-service

```txt
http://localhost:3001
```

---

## pagamentos-service

```txt
http://localhost:3002
```

---

## estoque-service

```txt
http://localhost:3003
```

---

# ☸ Executando Kubernetes

## Validar Kubernetes

```bash
kubectl version
```

---

## Aplicar manifests

```bash
kubectl apply -f k8s/
```

---

## Verificar pods

```bash
kubectl get pods
```

---

## Verificar services

```bash
kubectl get services
```

---

## Verificar todos os recursos

```bash
kubectl get all
```

---

# ⚙ Terraform

A pasta terraform contém arquivos Infrastructure as Code.

## Inicializar Terraform

```bash
terraform init
```

---

## Validar configuração

```bash
terraform validate
```

---

## Planejar infraestrutura

```bash
terraform plan
```

---

# 📊 Observabilidade

O projeto utiliza:

* Prometheus
* Grafana

Arquivos disponíveis em:

```txt
observability/
```

---

# 🔍 Microsserviços

## API Gateway

Responsável pelo roteamento das requisições.

---

## pedidos-service

Responsável pelo gerenciamento de pedidos.

---

## pagamentos-service

Responsável pelo processamento de pagamentos.

---

## estoque-service

Responsável pelo controle de estoque.

---

# 🔄 Pipeline CI/CD

O projeto possui pipeline automatizada utilizando GitHub Actions.

Arquivo:

```txt
.github/workflows/ci.yml
```

A pipeline executa:

* Checkout do código
* Instalação de dependências
* Build
* Testes
* Automação CI/CD

---

# 📈 Escalabilidade

O projeto utiliza:

* Kubernetes Deployments
* ReplicaSets
* HPA (Horizontal Pod Autoscaler)

Arquivo:

```txt
k8s/pedidos-hpa.yaml
```

---

# 🔐 Segurança

O projeto utiliza:

* Kubernetes Secrets
* ConfigMaps
* Isolamento por containers
* Orquestração segura

Arquivo:

```txt
k8s/postgres-secret.yaml
```

---

# 🖼 Evidências do Projeto

As evidências práticas estão disponíveis em:

```txt
docs/imagens/
```

Incluindo:

* Docker Compose funcionando
* Containers ativos
* APIs online
* Kubernetes ativo
* Deployments Kubernetes
* Services Kubernetes
* ReplicaSets
* HPA

---

# 📚 Documentação

A documentação complementar está disponível em:

```txt
docs/
```

---

# 👩‍💻 Autora

Joice Barbosa Santos

Projeto acadêmico desenvolvido para estudo de DevOps, Cloud Native e Microsserviços.

---

# 🚀 Status do Projeto

✅ Docker funcionando

✅ Kubernetes funcionando

✅ Microsserviços online

✅ API Gateway online

✅ Docker Compose validado

✅ Evidências documentadas

✅ CI/CD configurado

✅ Infraestrutura como código

✅ Observabilidade implementada
