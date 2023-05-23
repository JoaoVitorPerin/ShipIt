
package br.pucpr.shipIt.pedido.service;

import br.pucpr.shipIt.pedido.entity.Pedido;
import br.pucpr.shipIt.pedido.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido salvar(Pedido pedido){
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> listar() {
        return pedidoRepository.findAll();
    }

    public Pedido buscarPorId(Integer id) {
        return pedidoRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        pedidoRepository.deleteById(id);
    }

}
