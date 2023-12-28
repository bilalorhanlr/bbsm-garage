import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entities/card.entity';
import { YapilanlarController } from 'src/yapilanlar/yapilanlar.controller';
import { YapilanlarEntity } from 'src/yapilanlar/entities/yapilanlar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity]), TypeOrmModule.forFeature([YapilanlarEntity])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
