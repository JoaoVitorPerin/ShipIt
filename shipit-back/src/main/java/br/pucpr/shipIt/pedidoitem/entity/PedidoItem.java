package br.pucpr.shipIt.pedidoitem.entity;


import br.pucpr.shipIt.pedido.entity.Pedido;
import br.pucpr.shipIt.produto.entity.Produto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;


import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "pedido_item")
public class PedidoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedidoitem")
    private Long idPedidoitem;

    @ManyToOne
    @JoinColumn(name="pedido_id_pedido", referencedColumnName="id_pedido")
    private Pedido pedidoIdPedido;

    @ManyToOne
    @JoinColumn(name="produto_id_produto", referencedColumnName="id_produto")
    private Produto produtoIdProduto;

    @NotNull(message = "O SubTotal do produto é uma informação obrigatória")
    @Column(name = "subTotal_produto")
    private BigDecimal subTotalProduto;

    @NotNull(message = "A quantidade é uma informação obrigatória")
    @Column(name = "quantidade_produto")
    private Integer quantidadeProduto;

    public Long getIdPedidoitem() {
        return idPedidoitem;
    }

    public void setIdPedidoitem(Long idPedidoitem) {
        this.idPedidoitem = idPedidoitem;
    }

    public Pedido getPedidoIdPedido() {
        return pedidoIdPedido;
    }

    public void setPedidoIdPedido(Pedido pedidoIdPedido) {
        this.pedidoIdPedido = pedidoIdPedido;
    }

    public Produto getProdutoIdProduto() {
        return produtoIdProduto;
    }

    public void setProdutoIdProduto(Produto produtoIdProduto) {
        this.produtoIdProduto = produtoIdProduto;
    }

    public BigDecimal getSubTotalProduto() {
        return subTotalProduto;
    }

    public void setSubTotalProduto(BigDecimal subTotalProduto) {
        this.subTotalProduto = subTotalProduto;
    }

    public Integer getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Integer quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PedidoItem)) return false;
        PedidoItem that = (PedidoItem) o;
        return getIdPedidoitem().equals(that.getIdPedidoitem());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdPedidoitem());
    }

    @Override
    public String toString() {
        return "PedidoItem{" +
                "idPedidoitem=" + idPedidoitem +
                ", pedidoIdPedido=" + pedidoIdPedido +
                ", produtoIdProduto=" + produtoIdProduto +
                ", subTotalProduto=" + subTotalProduto +
                ", quantidadeProduto=" + quantidadeProduto +
                '}';
    }
}
