import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardEntity } from './entities/card.entity';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity) private databaseRepository: Repository<CardEntity>,) {}
  
  
  create(CreateCardDto: CardEntity ) {
    return this.databaseRepository.save(CreateCardDto);
  }

  findAll() {
    return this.databaseRepository.find();
  }

  async findOne( id : number) {
    const result = await this.databaseRepository.find({ 
      where: { 
        id : id,
      }
    });
    console.log(result);
    return result;
  }

  update(id: number, updateCardDto: CardEntity) {
    return `This action updates a #${id} card`;
  }

  removeAll() {
    return this.databaseRepository.delete({});
  }
  
  remove(id: number) {
    return this.databaseRepository.delete({"id":id});
  }
}
