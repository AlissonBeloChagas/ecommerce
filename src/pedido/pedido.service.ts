import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pedido } from './pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(pedido)
        private pedidoRepository: Repository<pedido>,
    ) { }

    async create(pedido: pedido) {
        return this.pedidoRepository.save(pedido);
    }

    async delete(id: number) {
        return this.pedidoRepository.delete(id);
    }

    async findById(id: number) {
        return this.pedidoRepository.findOne(id);
    }

    async findAll() {
        return this.pedidoRepository.find();
    }
}
