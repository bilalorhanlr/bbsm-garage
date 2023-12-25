import { StokService } from './stok.service';
import { UpdateStokDto } from './dto/update-stok.dto';
import { StokEntity } from './entities/stok.entity';
export declare class StokController {
    private readonly stokService;
    constructor(stokService: StokService);
    create(createStokDto: StokEntity): Promise<StokEntity>;
    findAll(): Promise<StokEntity[]>;
    findOne(id: string): Promise<StokEntity[]>;
    update(id: string, updateStokDto: UpdateStokDto): string;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
