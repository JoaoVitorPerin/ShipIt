package br.pucpr.shipIt.pedidoitem.repository;


import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoItemRepository extends JpaRepository<PedidoItem,Integer> {
}
