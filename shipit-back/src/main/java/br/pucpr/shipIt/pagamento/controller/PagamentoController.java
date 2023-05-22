package br.pucpr.shipIt.pagamento.controller;

import br.pucpr.shipIt.pagamento.entity.Pagamento;
import br.pucpr.shipIt.pagamento.service.PagamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pagamento")
public class PagamentoController {

    @Autowired
    PagamentoService pagamentoService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Pagamento pagamento)  {
        pagamento = pagamentoService.salvar(pagamento);
        return new ResponseEntity<>(pagamento, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Pagamento> listar() {
        return pagamentoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pagamento> buscarPorId(@PathVariable("id") Long id) {
        try {
            Pagamento pagamento = pagamentoService.buscarPorId(id);
            return new ResponseEntity<>(pagamento, HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Long id) {
        pagamentoService.excluir(id);
    }

}
