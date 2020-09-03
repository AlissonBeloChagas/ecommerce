import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produto/produto.controller';
import { ClienteController } from './cliente/cliente.controller';
import { PedidoController } from './pedido/pedido.controller';
import { EstoqueController } from './estoque/estoque.controller';
import { MovimentaEstoqueController } from './movimenta-estoque/movimenta-estoque.controller';
import { ProdutoService } from './produto/produto.service';
import { ClienteService } from './cliente/cliente.service';
import { PedidoService } from './pedido/pedido.service';
import { EstoqueService } from './estoque/estoque.service';
import { MovimentaEstoqueService } from './movimenta-estoque/movimenta-estoque.service';
import { PedidoItemController } from './pedido-item/pedido-item.controller';
import { PedidoItemService } from './pedido-item/pedido-item.service';

@Module({
  imports: [],
  controllers: [AppController, ProdutoController, ClienteController, PedidoController, EstoqueController, MovimentaEstoqueController, PedidoItemController],
  providers: [AppService, ProdutoService, ClienteService, PedidoService, EstoqueService, MovimentaEstoqueService, PedidoItemService],
})
export class AppModule {}
