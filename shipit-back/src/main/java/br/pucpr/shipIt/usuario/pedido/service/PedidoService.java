
package br.pucpr.shipIt.usuario.pedido.service;

import br.pucpr.shipIt.usuario.pedido.entity.Pedido;
import br.pucpr.shipIt.usuario.pedido.repository.PedidoRepository;
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

    public Pedido buscarPorId(Long id) {
        return pedidoRepository.findById(id).get();
    }

    public void excluir(Long id) {
        pedidoRepository.deleteById(id);
    }

}
