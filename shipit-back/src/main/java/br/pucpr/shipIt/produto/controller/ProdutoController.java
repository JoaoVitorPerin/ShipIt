package br.pucpr.shipIt.produto.controller;

import br.pucpr.shipIt.produto.entity.Produto;
import br.pucpr.shipIt.produto.service.ProdutoService;
import jakarta.transaction.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/produto")
/*@SecurityScheme(
        name = "Bearer",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer"
)*/
public class ProdutoController {

    @Autowired
    ProdutoService produtoService;

    @PostMapping("/salvar")
    public ResponseEntity<?> salvar(@RequestBody Produto produto) throws SystemException {
        System.out.println("entrou?");
        System.out.println("entrei aquii"+produto.toString());
        produtoService.salvar(produto);
        return new ResponseEntity<>(produto, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable("id") Long id) {
        try {
            Produto usuario = produtoService.buscarPorId(id);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Long id) {
        produtoService.excluir(id);
    }

}
