package br.pucpr.shipIt.pedidoitem.controller;


import br.pucpr.shipIt.usuario.pedido.entity.Pedido;
import br.pucpr.shipIt.usuario.pedido.service.PedidoService;
import br.pucpr.shipIt.pedidoitem.entity.PedidoItem;
import br.pucpr.shipIt.pedidoitem.service.PedidoItemService;
import br.pucpr.shipIt.produto.entity.Produto;
import br.pucpr.shipIt.produto.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pedidoItem")
public class PedidoItemController {

    @Autowired
    PedidoItemService pedidoItemService;

    @Autowired
    ProdutoService produtoService;

    @Autowired
    PedidoService pedidoService;

    @PostMapping("/salvar")
    public ResponseEntity<?> salvar(@RequestBody PedidoItem pedidoItem) {
        Produto produto = produtoService.buscarPorId(Long.parseLong(pedidoItem.getProdutoId()));
        pedidoItem.setProdutoIdProduto(produto);
        Pedido pedido = pedidoService.buscarPorId(Long.parseLong(pedidoItem.getPedidoId()));
        pedidoItem.setPedidoIdPedido(pedido);
        pedidoItem.setQuantidadeProduto(Integer.valueOf(1));
        pedidoItem.setSubTotalProduto(new BigDecimal(produto.getValorProduto()));
        pedidoItem = pedidoItemService.salvar(pedidoItem);
        return new ResponseEntity<>(pedidoItem, HttpStatus.CREATED);
    }

    @GetMapping
    public List<PedidoItem> listar() {
        return pedidoItemService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoItem> buscarPorId(@PathVariable("id") Long id) {
        try {
            PedidoItem usuario = pedidoItemService.buscarPorId(id);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Long id) {
        pedidoItemService.excluir(id);
    }

    @GetMapping("/getPedidoItemByPedidoId/{id}")
    public List<PedidoItem> getPedidoItemByPedidoId(@PathVariable("id") Long id) {
        return pedidoItemService.getPedidoItemByPedidoId(id);
    }

}
