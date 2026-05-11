# Fluxo da Aplicação

## Fluxo principal

1. Cliente acessa API Gateway
2. API Gateway encaminha requisição
3. Microsserviço processa operação
4. Resposta retorna ao cliente

## Comunicação

Os microsserviços se comunicam via HTTP REST.

## Observabilidade

As métricas serão monitoradas pelo Prometheus e visualizadas no Grafana.