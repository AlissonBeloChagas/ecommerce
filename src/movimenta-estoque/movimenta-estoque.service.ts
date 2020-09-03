import { Injectable } from '@nestjs/common';
import { movimentaEstoque } from './movimenta-estoque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovimentaEstoqueService {
    constructor(
        @InjectRepository(movimentaEstoque)
        private movimentaEstoqueRepository: Repository<movimentaEstoque>,
    ) { }

    async create(movimentaEstoque: movimentaEstoque) {
        return this.movimentaEstoqueRepository.save(movimentaEstoque);
    }

    async delete(id: number) {
        return this.movimentaEstoqueRepository.delete(id);
    }

    async findById(id: number) {
        return this.movimentaEstoqueRepository.findOne(id);
    }

    async findAll() {
        return this.movimentaEstoqueRepository.find();
    }
}
