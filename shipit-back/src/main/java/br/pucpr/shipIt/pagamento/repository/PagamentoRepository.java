package br.pucpr.shipIt.pagamento.repository;
import br.pucpr.shipIt.pagamento.entity.Pagamento;
import br.pucpr.shipIt.produto.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PagamentoRepository extends JpaRepository<Pagamento,Long> {

    @Query("select pgto from Pagamento pgto where pgto.usuarioIdUsuario.idUsuario = ?1")
    public List<Pagamento> getPagamentoByIdOperador(Long id);

}
