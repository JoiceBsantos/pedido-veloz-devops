output "namespace" {
  value = kubernetes_namespace.pedido_veloz.metadata[0].name
}