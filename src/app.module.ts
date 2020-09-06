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
import { TypeOrmModule } from '@nestjs/typeorm';
import { movimentaEstoque } from './movimenta-estoque/movimenta-estoque.entity';
import { estoque } from './estoque/estoque.entity';
import { cliente } from './cliente/cliente.entity';
import { pedido } from './pedido/pedido.entity';
import { pedidoItem } from './pedido-item/pedido-item.entity';
import { produto } from './produto/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'enviaEmail',
      entities: [
        cliente, estoque, movimentaEstoque, pedido, pedidoItem, produto
      ],
      synchronize: true,
      logging: true,
    }),
    
    TypeOrmModule.forFeature([ cliente, estoque, movimentaEstoque, pedido, pedidoItem, produto])
  ],
  controllers: [AppController, ProdutoController, ClienteController, PedidoController, EstoqueController, MovimentaEstoqueController, PedidoItemController],
  providers: [AppService, ProdutoService, ClienteService, PedidoService, EstoqueService, MovimentaEstoqueService, PedidoItemService],
})
export class AppModule {}
