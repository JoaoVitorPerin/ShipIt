package br.pucpr.shipIt.pagamento.repository;
import br.pucpr.shipIt.pagamento.entity.Pagamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagamentoRepository extends JpaRepository<Pagamento,Long> {
}
