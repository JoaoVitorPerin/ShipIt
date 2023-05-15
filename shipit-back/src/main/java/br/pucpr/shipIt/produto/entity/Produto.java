package br.pucpr.shipIt.produto.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;


import java.util.Objects;

@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produto")
    private Long idProduto;

    @NotNull(message = "A descrição do produto é uma informação obrigatória")
    @Column(name = "descricao_produto", nullable = false, length = 255)
    private String descricaoProduto;

    @NotNull(message = "O valor total do produto é uma informação obrigatória")
    @Column(name = "valor_produto")
    private Double valorProduto;

    @NotNull(message = "A quantidade é uma informação obrigatória")
    @Column(name = "quantidadeEstoque_produto")
    private Integer quantidadeEstoqueProduto;

    @Column(name = "path_produto", nullable = false)
    private String pathProduto;

    public Long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
    }

    public String getDescricaoProduto() {
        return descricaoProduto;
    }

    public void setDescricaoProduto(String descricaoProduto) {
        this.descricaoProduto = descricaoProduto;
    }

    public Double getValorProduto() {
        return valorProduto;
    }

    public void setValorProduto(Double valorProduto) {
        this.valorProduto = valorProduto;
    }

    public Integer getQuantidadeEstoqueProduto() {
        return quantidadeEstoqueProduto;
    }

    public void setQuantidadeEstoqueProduto(Integer quantidadeEstoqueProduto) {
        this.quantidadeEstoqueProduto = quantidadeEstoqueProduto;
    }

    public String getPathProduto() {
        return pathProduto;
    }

    public void setPathProduto(String pathProduto) {
        this.pathProduto = pathProduto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Produto)) return false;
        Produto produto = (Produto) o;
        return getIdProduto().equals(produto.getIdProduto());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdProduto());
    }

    @Override
    public String toString() {
        return "Produto{" +
                "idProduto=" + idProduto +
                ", descricaoProduto='" + descricaoProduto + '\'' +
                ", valorProduto=" + valorProduto +
                ", quantidadeEstoqueProduto=" + quantidadeEstoqueProduto +
                ", pathProduto='" + pathProduto + '\'' +
                '}';
    }
}
