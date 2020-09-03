import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { estoque } from "src/estoque/estoque.entity";
import { produto } from "src/produto/produto.entity";
import { pedido } from "src/pedido/pedido.entity";

@Entity('movimentaEstoque')
export class movimentaEstoque{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'descricao', type: 'varchar', length: 100})
    descricao: string;

    @Column({name: 'tipoMovimentacao', type: 'varchar', length: 1})
    tipoMovimentacao: string;

    @Column({name: 'quantidade', type: 'number'})
    quantidade: number;

    @ManyToOne(type => estoque, estoque => estoque.movimentaEstoque)
    @JoinTable({name: 'estoqueId'})
    estoque: estoque;

    @ManyToOne(type => produto, produto => produto.movimentaEstoque)
    @JoinTable({name: 'produtoId'})
    produto: produto;

    @ManyToOne(type => pedido, pedido => pedido.movimentaEstoque)
    @JoinTable({name: 'pedidoId'})
    pedido: pedido;
}