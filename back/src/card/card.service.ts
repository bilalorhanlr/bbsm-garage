import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './entities/card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { YapilanlarEntity } from 'src/yapilanlar/entities/yapilanlar.entity';
import { CreateYapilanlarDto } from 'src/yapilanlar/dto/create-yapilanlar.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity) 
    private databaseRepository: Repository<CardEntity>,
    @InjectRepository(YapilanlarEntity) 
    private yapilanlarRepository: Repository<YapilanlarEntity>,
  ) {}

  async updateCardYapilanlar(CreateYapilanlarDto : CreateYapilanlarDto, id : number){
    let card = await this.databaseRepository.findOne({ where: { card_id: id }, relations: ['yapilanlar'] });

    let yeniYapilan = new YapilanlarEntity();
    yeniYapilan.adet = CreateYapilanlarDto.adet;
    yeniYapilan.parcaAdi = CreateYapilanlarDto.parcaAdi;
    yeniYapilan.fiyat = CreateYapilanlarDto.fiyat;
    yeniYapilan.card = card;

    await this.yapilanlarRepository.save(yeniYapilan);

    // Kartı kaydet (gerekirse)
    // Bu adım kart ile Yapilanlar arasındaki ilişkiyi güncellemek için gerekli
    return this.databaseRepository.save(card);
  }
  


  create(createCardDto: CreateCardDto) {
    const newCard = this.databaseRepository.create(createCardDto);
    return this.databaseRepository.save(newCard);
  }


  findAll() {
    return this.databaseRepository.find({ relations: ['yapilanlar'] });
  }

  async findYapilanlarByCardId(card_id: number) {
    return this.databaseRepository.findOne({
      where: { card_id },
      relations: ['yapilanlar'],
    })
  }
  

  update(card_id: number, updateCardDto: CardEntity) {
    // Güncelleme
    return `This action updates a #${card_id} card`;
  }

  removeAll() {
    return this.databaseRepository.delete({});
  }
  
  remove(card_id: number) {
    return this.databaseRepository.delete({ card_id });
  }
}
