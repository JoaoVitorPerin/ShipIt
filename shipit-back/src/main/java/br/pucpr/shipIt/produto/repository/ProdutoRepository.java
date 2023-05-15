package br.pucpr.shipIt.produto.repository;

import br.pucpr.shipIt.produto.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto,Long> {
}
