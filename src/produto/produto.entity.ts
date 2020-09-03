import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { pedidoItem } from "src/pedido-item/pedido-item.entity";
import { movimentaEstoque } from "src/movimenta-estoque/movimenta-estoque.entity";

@Entity('produto')
export class produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome', type: 'varchar', length: 100})
    nome: string;

    @Column({name: 'descricao', type: 'varchar', length: 100})
    codigo: string;

    @Column({name: 'preco', type: 'decimal'})
    preco: number;

    @Column({name: 'precoDesconto', type: 'decimal'})
    precoDesconto: number;

    @OneToMany(type => pedidoItem, pedidoItem => pedidoItem.produto, {cascade: true, eager: true})
    pedidoItem: Array<pedidoItem>;

    @OneToMany(type => movimentaEstoque, movimentaEstoque => movimentaEstoque.produto, {cascade: true, eager: true})
    movimentaEstoque: Array<movimentaEstoque>;
}