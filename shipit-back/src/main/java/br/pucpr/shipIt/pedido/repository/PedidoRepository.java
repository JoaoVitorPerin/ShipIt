package br.pucpr.shipIt.pedido.repository;

import br.pucpr.shipIt.pedido.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido,Integer> {
}
