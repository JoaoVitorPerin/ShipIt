package br.pucpr.shipIt.pagamento.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.util.Objects;

@Entity
@Table(name = "pagamento")
public class Pagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pagamento")
    private Long idPagamento;

    @Column(name = "numero_cartao", nullable = false, length = 255)
    private String numeroCartao;

    @NotNull(message = "A forme de pagamento é um informação obrigatória")
    @Column(name = "formaPgto_pagamento", nullable = false, length = 255)
    private String formaPgtoPagamento;

    public Long getIdPagamento() {
        return idPagamento;
    }

    public void setIdPagamento(Long idPagamento) {
        this.idPagamento = idPagamento;
    }

    public String getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public String getFormaPgtoPagamento() {
        return formaPgtoPagamento;
    }

    public void setFormaPgtoPagamento(String formaPgtoPagamento) {
        this.formaPgtoPagamento = formaPgtoPagamento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Pagamento)) return false;
        Pagamento pagamento = (Pagamento) o;
        return getIdPagamento().equals(pagamento.getIdPagamento());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdPagamento());
    }

    @Override
    public String toString() {
        return "Pagamento{" +
                "idPagamento=" + idPagamento +
                ", numeroCartao='" + numeroCartao + '\'' +
                ", formaPgtoPagamento='" + formaPgtoPagamento + '\'' +
                '}';
    }
}
