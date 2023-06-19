package br.pucpr.shipIt.pedidoitem.repository;


import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import br.pucpr.shipIt.usuario.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PedidoItemRepository extends JpaRepository<PedidoItem,Long> {

    @Query("select pei from PedidoItem pei where pei.pedidoIdPedido.idPedido = ?1")
    public List<PedidoItem> getPedidoItemByPedidoId(Long id);
}
