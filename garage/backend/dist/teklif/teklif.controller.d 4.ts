import { TeklifService } from './teklif.service';
import { UpdateTeklifDto } from './dto/update-teklif.dto';
import { TeklifEntity } from './entities/teklif.entity';
export declare class TeklifController {
    private readonly teklifService;
    constructor(teklifService: TeklifService);
    create(createTeklifDto: TeklifEntity): Promise<TeklifEntity>;
    findAll(): Promise<TeklifEntity[]>;
    findOne(id: string): Promise<TeklifEntity[]>;
    update(id: string, updateTeklifDto: UpdateTeklifDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
