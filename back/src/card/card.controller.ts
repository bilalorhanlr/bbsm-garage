import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardEntity } from './entities/card.entity';
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CardEntity) {
    return this.cardService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id') // Bu yol, ID'ye göre tek bir kart bulmak için kullanılır.
  findOne(@Param('id') id: string) {
    console.log(id);
    console.log(parseInt(id, 10))
    return this.cardService.findOne(parseInt(id, 10));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: CardEntity) {
    return this.cardService.update(parseInt(id, 10), updateCardDto);
  }

  @Delete("delAll") 
  removeAll() {
    return this.cardService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(parseInt(id, 10));
  }
}
