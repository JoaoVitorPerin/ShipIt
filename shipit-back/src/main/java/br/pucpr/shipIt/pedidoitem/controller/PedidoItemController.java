package br.pucpr.shipIt.pedidoitem.controller;


import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import br.pucpr.shipIt.pedidoitem.service.PedidoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pedidoItem")
public class PedidoItemController {

    @Autowired
    PedidoItemService pedidoItemService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody PedidoItem usuario) {
        usuario = pedidoItemService.salvar(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @GetMapping
    public List<PedidoItem> listar() {
        return pedidoItemService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoItem> buscarPorId(@PathVariable("id") Integer id) {
        try {
            PedidoItem usuario = pedidoItemService.buscarPorId(id);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) {
        pedidoItemService.excluir(id);
    }

}
