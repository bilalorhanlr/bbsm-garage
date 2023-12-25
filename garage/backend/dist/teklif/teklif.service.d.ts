import { UpdateTeklifDto } from './dto/update-teklif.dto';
import { TeklifEntity } from './entities/teklif.entity';
import { Repository } from 'typeorm';
export declare class TeklifService {
    private databaseRepository;
    constructor(databaseRepository: Repository<TeklifEntity>);
    create(CreateStokDto: TeklifEntity): Promise<TeklifEntity>;
    findAll(): Promise<TeklifEntity[]>;
    findOne(id: number): Promise<TeklifEntity[]>;
    update(id: number, updateStokDto: UpdateTeklifDto): string;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    remove(teklif_id: number): Promise<import("typeorm").DeleteResult>;
}
