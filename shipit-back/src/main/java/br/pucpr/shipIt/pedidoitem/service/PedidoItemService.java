package br.pucpr.shipIt.pedidoitem.service;

import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import br.pucpr.shipIt.pedidoitem.repository.PedidoItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public PedidoItem buscarPorId(Integer id) {
        return pedidoItemRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        pedidoItemRepository.deleteById(id);
    }

}
