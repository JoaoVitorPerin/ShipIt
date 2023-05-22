package br.pucpr.shipIt.produto.service;


import br.pucpr.shipIt.produto.entity.Produto;
import br.pucpr.shipIt.produto.repository.ProdutoRepository;
import jakarta.annotation.Resource;
import jakarta.transaction.SystemException;
import jakarta.transaction.Transactional;
import jakarta.transaction.UserTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    //@Resource
    //private UserTransaction utx;

    //@Transactional(value = Transactional.TxType.REQUIRES_NEW)
    public void salvar(Produto produto) throws SystemException {
        try {
            //utx.begin();

            produtoRepository.save(produto);
            //utx.commit();
        } catch (Exception e) {
            e.printStackTrace();
            //return e.getMessage();
            //utx.rollback();
        }
    }

    public List<Produto> listar() {
        return produtoRepository.findAll();
    }

    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id).get();
    }

    public void excluir(Long id) {
        produtoRepository.deleteById(id);
    }

}
