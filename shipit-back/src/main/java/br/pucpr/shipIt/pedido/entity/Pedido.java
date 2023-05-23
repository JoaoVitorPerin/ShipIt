package br.pucpr.shipIt.pedido.entity;


import br.pucpr.shipIt.usuario.entity.Usuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "pedido")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Long idPedido;

    @Column(name = "data_pedido", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dataPedido;

    @NotNull(message = "A descrição do produto é uma informação obrigatória")
    @Column(name = "valorTotal_pedido", nullable = false, length = 255)
    private BigDecimal valorTotalPedido;

    @NotNull(message = "O valor total do produto é uma informação obrigatória")
    @Column(name = "valor_produto")
    private BigDecimal valorProduto;

    @ManyToOne
    @JoinColumn(name="usuario_id_usuario", referencedColumnName="id_usuario")
    private Usuario usuarioIdUsuario;

    @ManyToOne
    @JoinColumn(name="pagamento_id_pagamento", referencedColumnName="id_pagamento")
    private Pagamento pagamentoIdPagamento;

    @NotNull(message = "A quantidade é uma informação obrigatória")
    @Column(name = "quantidadeEstoque_produto", nullable = false, length = 255, unique = true)
    private Integer quantidadeEstoqueProduto;

    public Long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }

    public BigDecimal getValorTotalPedido() {
        return valorTotalPedido;
    }

    public void setValorTotalPedido(BigDecimal valorTotalPedido) {
        this.valorTotalPedido = valorTotalPedido;
    }

    public BigDecimal getValorProduto() {
        return valorProduto;
    }

    public void setValorProduto(BigDecimal valorProduto) {
        this.valorProduto = valorProduto;
    }

    public Usuario getUsuarioIdUsuario() {
        return usuarioIdUsuario;
    }

    public void setUsuarioIdUsuario(Usuario usuarioIdUsuario) {
        this.usuarioIdUsuario = usuarioIdUsuario;
    }

    public Pagamento getPagamentoIdPagamento() {
        return pagamentoIdPagamento;
    }

    public Date getDataPedido() {
        return dataPedido;
    }

    public void setDataPedido(Date dataPedido) {
        this.dataPedido = dataPedido;
    }

    public void setPagamentoIdPagamento(Pagamento pagamentoIdPagamento) {
        this.pagamentoIdPagamento = pagamentoIdPagamento;
    }

    public Integer getQuantidadeEstoqueProduto() {
        return quantidadeEstoqueProduto;
    }

    public void setQuantidadeEstoqueProduto(Integer quantidadeEstoqueProduto) {
        this.quantidadeEstoqueProduto = quantidadeEstoqueProduto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Pedido)) return false;
        Pedido pedido = (Pedido) o;
        return getIdPedido().equals(pedido.getIdPedido());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdPedido());
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "idPedido=" + idPedido +
                ", valorTotalPedido=" + valorTotalPedido +
                ", valorProduto=" + valorProduto +
                ", usuarioIdUsuario=" + usuarioIdUsuario +
                ", pagamentoIdPagamento=" + pagamentoIdPagamento +
                ", quantidadeEstoqueProduto='" + quantidadeEstoqueProduto + '\'' +
                '}';
    }
}
