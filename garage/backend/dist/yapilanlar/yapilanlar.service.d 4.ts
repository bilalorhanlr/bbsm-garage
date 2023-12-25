import { Repository } from 'typeorm';
import { CreateYapilanlarDto } from './dto/create-yapilanlar.dto';
import { UpdateYapilanlarDto } from './dto/update-yapilanlar.dto';
import { YapilanlarEntity } from './entities/yapilanlar.entity';
export declare class YapilanlarService {
    private databaseRepository;
    constructor(databaseRepository: Repository<YapilanlarEntity>);
    create(createYapilanlarDto: CreateYapilanlarDto): Promise<YapilanlarEntity>;
    findAll(): Promise<YapilanlarEntity[]>;
    findOne(id: number): Promise<YapilanlarEntity>;
    update(id: number, updateYapilanlarDto: UpdateYapilanlarDto): Promise<YapilanlarEntity>;
    remove(id: number): Promise<YapilanlarEntity>;
}
