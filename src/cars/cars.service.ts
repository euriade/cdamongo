/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schema/car.schema';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const createdCar = await this.carModel.create(createCarDto);
        return createdCar;
    }

    async findAll(): Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async findBy(id: string): Promise<Car> {
        return this.carModel.findOne({_id: id}).exec();
    }

    async findAndDelete(id: string): Promise<Car> {
        const deletedCar = await this.carModel
            .findByIdAndDelete({_id: id})
            .exec();
        return deletedCar;
    }
}
