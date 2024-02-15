/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './schema/car.schema';

@Controller('cars')
export class CarsController {

    constructor(private readonly carService: CarsService) {}

    @Post()
    async create(@Body() createCarDto: CreateCarDto) {
        await this.carService.create(createCarDto);
    }

    @Get()
    async findAll(): Promise<Car[]>  {
        return this.carService.findAll();
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<Car> {
        return this.carService.findBy(id);
    }

    @Delete(":id")
    async findAndDelete(@Param("id") id:string): Promise<Car> {
        return this.carService.findAndDelete(id);
    }
}
