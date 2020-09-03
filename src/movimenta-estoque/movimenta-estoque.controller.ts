import { Controller, Body, Post, Delete, Param, Get } from '@nestjs/common';
import { MovimentaEstoqueService } from './movimenta-estoque.service';

@Controller('movimenta-estoque')
export class MovimentaEstoqueController {
    constructor(private readonly movimentaEstoque: MovimentaEstoqueService) { }

    @Get() 
    async findAll() {
        return await this.movimentaEstoque.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.movimentaEstoque.findById(id)
    }

    @Post()
    async create(@Body() movimentaEstoque) {
        return await this.movimentaEstoque.create(movimentaEstoque)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
