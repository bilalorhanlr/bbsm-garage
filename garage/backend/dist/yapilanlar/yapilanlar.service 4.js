"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapilanlarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const yapilanlar_entity_1 = require("./entities/yapilanlar.entity");
let YapilanlarService = class YapilanlarService {
    constructor(databaseRepository) {
        this.databaseRepository = databaseRepository;
    }
    create(createYapilanlarDto) {
        const yeniYapilanlar = this.databaseRepository.create(createYapilanlarDto);
        return this.databaseRepository.save(yeniYapilanlar);
    }
    findAll() {
        return this.databaseRepository.find();
    }
    async findOne(id) {
        const yapilanlar = await this.databaseRepository.findOne({ where: { id } });
        if (!yapilanlar) {
            throw new common_1.NotFoundException(`Yapılan işlem ID: ${id} bulunamadı.`);
        }
        return yapilanlar;
    }
    async update(id, updateYapilanlarDto) {
        const yapilanlar = await this.findOne(id);
        Object.assign(yapilanlar, updateYapilanlarDto);
        return this.databaseRepository.save(yapilanlar);
    }
    async remove(id) {
        const yapilanlar = await this.findOne(id);
        return this.databaseRepository.remove(yapilanlar);
    }
};
exports.YapilanlarService = YapilanlarService;
exports.YapilanlarService = YapilanlarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(yapilanlar_entity_1.YapilanlarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], YapilanlarService);
//# sourceMappingURL=yapilanlar.service.js.map