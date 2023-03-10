import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports:[
    TypeOrmModule.forFeature([ Category ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  exports: [ TypeOrmModule ]
})
export class CategoriesModule {}
