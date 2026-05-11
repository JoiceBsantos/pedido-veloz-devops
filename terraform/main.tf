resource "kubernetes_namespace" "pedido_veloz" {

  metadata {
    name = "pedido-veloz"
  }
}