package br.pucpr.shipIt.pagamento.controller;

import br.pucpr.shipIt.pagamento.entity.Pagamento;
import br.pucpr.shipIt.pagamento.service.PagamentoService;
import br.pucpr.shipIt.usuario.entity.Usuario;
import br.pucpr.shipIt.usuario.service.UsuarioService;
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

    @Autowired
    UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Pagamento pagamento)  {
        Usuario user = usuarioService.buscarPorId(Long.parseLong(pagamento.getIdUsuario()));
        pagamento.setUsuarioIdUsuario(user);
        pagamento = pagamentoService.salvar(pagamento);
        return new ResponseEntity<>(pagamento, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Pagamento> listar() {
        return pagamentoService.listar();
    }

    @GetMapping("/getPagamentoByIdOperador/{id}")
    public List<Pagamento> getPagamentoByIdOperador(@PathVariable("id") Long id) {
        Usuario user = usuarioService.buscarPorId(id);
        if(user.isAdminUsuario()){
            return listar();
        } else {
            return pagamentoService.getPagamentoByIdOperador(id);
        }
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
