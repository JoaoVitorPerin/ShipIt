package br.pucpr.shipIt.produto.repository;

import br.pucpr.shipIt.produto.entity.Produto;
import br.pucpr.shipIt.usuario.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto,Long> {

    @Query("select prod from Produto prod where prod.usuarioIdUsuario.idUsuario = ?1")
    public List<Produto> getProdutoByUsuario(Long id);

}
