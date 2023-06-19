package br.pucpr.shipIt.pedidoitem.service;

import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import br.pucpr.shipIt.pedidoitem.repository.PedidoItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class PedidoItemService {    

    @Autowired
    private PedidoItemRepository pedidoItemRepository;

    public PedidoItem salvar(PedidoItem usuario) {
        return pedidoItemRepository.save(usuario);
    }

    public List<PedidoItem> listar() {
        return pedidoItemRepository.findAll();
    }

    public List<PedidoItem> getPedidoItemByPedidoId(Long id) {
        return pedidoItemRepository.getPedidoItemByPedidoId(id);
    }

    public PedidoItem buscarPorId(Long id) {
        return pedidoItemRepository.findById(id).get();
    }

    public void excluir(Long id) {
        pedidoItemRepository.deleteById(id);
    }

}
