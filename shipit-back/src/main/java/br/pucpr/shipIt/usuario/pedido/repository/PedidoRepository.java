package br.pucpr.shipIt.usuario.pedido.repository;

import br.pucpr.shipIt.usuario.pedido.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido,Long> {
}
