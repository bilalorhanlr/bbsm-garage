import { YapilanlarService } from './yapilanlar.service';
import { CreateYapilanlarDto } from './dto/create-yapilanlar.dto';
import { UpdateYapilanlarDto } from './dto/update-yapilanlar.dto';
export declare class YapilanlarController {
    private readonly yapilanlarService;
    constructor(yapilanlarService: YapilanlarService);
    create(createYapilanlarDto: CreateYapilanlarDto): Promise<import("./entities/yapilanlar.entity").YapilanlarEntity>;
    findAll(): Promise<import("./entities/yapilanlar.entity").YapilanlarEntity[]>;
    findOne(id: string): Promise<import("./entities/yapilanlar.entity").YapilanlarEntity>;
    update(id: string, updateYapilanlarDto: UpdateYapilanlarDto): Promise<import("./entities/yapilanlar.entity").YapilanlarEntity>;
    remove(id: string): Promise<import("./entities/yapilanlar.entity").YapilanlarEntity>;
}
