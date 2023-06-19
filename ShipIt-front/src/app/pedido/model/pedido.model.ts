export class PedidoModel{
  idPedido?: number;
  dataPedido? : Date;
  valorTotalPedido? : number = 0.00;
  usuarioId : string = '';
  pagamentoId : string = '';
  abertoPedido? : boolean;
}
