package br.pucpr.shipIt.pagamento.service;
import br.pucpr.shipIt.pagamento.entity.Pagamento;
import br.pucpr.shipIt.pagamento.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagamentoService {

    @Autowired
    private PagamentoRepository pagamentoRepository;

    public Pagamento salvar(Pagamento pagamento) {
        return pagamentoRepository.save(pagamento);
    }

    public List<Pagamento> listar() {
        return pagamentoRepository.findAll();
    }

    public Pagamento buscarPorId(Long id) {
        return pagamentoRepository.findById(id).get();
    }

    public void excluir(Long id) {
        pagamentoRepository.deleteById(id);
    }

}
