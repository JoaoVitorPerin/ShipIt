package br.pucpr.shipIt.usuario.pedido.controller;
import br.pucpr.shipIt.usuario.pedido.entity.Pedido;
import br.pucpr.shipIt.usuario.pedido.service.PedidoService;
import br.pucpr.shipIt.usuario.entity.Usuario;
import br.pucpr.shipIt.usuario.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @Autowired
    PedidoService pedidoService;

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/salvar")
    public ResponseEntity<?> salvar(@RequestBody Pedido pedido) {
        Usuario user = usuarioService.buscarPorId(Long.parseLong(pedido.getUsuarioId()));
        pedido.setUsuarioIdUsuario(user);
        pedido.setAbertoPedido(true);
        pedido = pedidoService.salvar(pedido);
        return new ResponseEntity<>(pedido, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Pedido> listar() {
        return pedidoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPorId(@PathVariable("id") Long id) {
        try {
            Pedido usuario = pedidoService.buscarPorId(id);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Long id) {
        pedidoService.excluir(id);
    }

}
