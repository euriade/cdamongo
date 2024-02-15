import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])]
})

export class CarsModule {}
