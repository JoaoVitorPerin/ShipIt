package br.pucpr.shipIt.usuario.pedido.entity;


import br.pucpr.shipIt.pagamento.entity.Pagamento;
import br.pucpr.shipIt.usuario.entity.Usuario;
import jakarta.persistence.*;

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

    @Column(name = "valorTotal_pedido", nullable = false, length = 255)
    private BigDecimal valorTotalPedido;

    @ManyToOne
    @JoinColumn(name="usuario_id_usuario", referencedColumnName="id_usuario")
    private Usuario usuarioIdUsuario;

    @Column(name = "aberto_pedido", nullable = false, length = 255)
    private boolean abertoPedido;

    @Transient
    private String usuarioId;

    @Transient
    private String pagamentoId;

    @ManyToOne
    @JoinColumn(name="pagamento_id_pagamento", referencedColumnName="id_pagamento")
    private Pagamento pagamentoIdPagamento;

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

    public boolean isAbertoPedido() {
        return abertoPedido;
    }

    public void setAbertoPedido(boolean abertoPedido) {
        this.abertoPedido = abertoPedido;
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

    public String getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(String usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getPagamentoId() {
        return pagamentoId;
    }

    public void setPagamentoId(String pagamentoId) {
        this.pagamentoId = pagamentoId;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "idPedido=" + idPedido +
                ", dataPedido=" + dataPedido +
                ", valorTotalPedido=" + valorTotalPedido +
                ", usuarioIdUsuario=" + usuarioIdUsuario +
                ", abertoPedido=" + abertoPedido +
                ", usuarioId='" + usuarioId + '\'' +
                ", pagamentoId='" + pagamentoId + '\'' +
                ", pagamentoIdPagamento=" + pagamentoIdPagamento +
                '}';
    }
}

