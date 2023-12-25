import { UpdateStokDto } from './dto/update-stok.dto';
import { StokEntity } from './entities/stok.entity';
import { Repository } from 'typeorm';
export declare class StokService {
    private databaseRepository;
    constructor(databaseRepository: Repository<StokEntity>);
    create(CreateStokDto: StokEntity): Promise<StokEntity>;
    findAll(): Promise<StokEntity[]>;
    findOne(id: number): Promise<StokEntity[]>;
    update(id: number, updateStokDto: UpdateStokDto): string;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    x: any;
}
