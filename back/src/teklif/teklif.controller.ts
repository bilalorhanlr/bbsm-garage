import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeklifService } from './teklif.service';
import { CreateTeklifDto } from './dto/create-teklif.dto';
import { UpdateTeklifDto } from './dto/update-teklif.dto';
import { TeklifEntity } from './entities/teklif.entity';

@Controller('teklif')
export class TeklifController {
  constructor(private readonly teklifService: TeklifService) {}

  @Post()
  create(@Body() createTeklifDto: TeklifEntity) {
    return this.teklifService.create(createTeklifDto);
  }

  @Get()
  findAll() {
    return this.teklifService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teklifService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeklifDto: UpdateTeklifDto) {
    return this.teklifService.update(+id, updateTeklifDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teklifService.remove(+id);
  }
}
