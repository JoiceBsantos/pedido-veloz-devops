# Segurança Kubernetes

## Estratégias Utilizadas

- ConfigMaps
- Secrets
- readinessProbe
- livenessProbe

## Objetivos

- proteger credenciais
- melhorar disponibilidade
- aumentar confiabilidade
- reduzir falhas

## Escalabilidade

A arquitetura utiliza Horizontal Pod Autoscaler (HPA) para escalabilidade automática baseada em CPU.

## Benefícios

- alta disponibilidade
- recuperação automática
- monitoramento contínuo
- arquitetura resiliente