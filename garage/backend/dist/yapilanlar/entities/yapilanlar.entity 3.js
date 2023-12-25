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
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapilanlarEntity = void 0;
const typeorm_1 = require("typeorm");
const card_entity_1 = require("../../card/entities/card.entity");
const teklif_entity_1 = require("../../teklif/entities/teklif.entity");
let YapilanlarEntity = class YapilanlarEntity {
    get toplamFiyat() {
        return this.adet * this.fiyat;
    }
};
exports.YapilanlarEntity = YapilanlarEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], YapilanlarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => card_entity_1.CardEntity),
    (0, typeorm_1.JoinColumn)({ name: 'kart_id' }),
    __metadata("design:type", card_entity_1.CardEntity)
], YapilanlarEntity.prototype, "kart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teklif_entity_1.TeklifEntity),
    (0, typeorm_1.JoinColumn)({ name: 'teklif_id' }),
    __metadata("design:type", teklif_entity_1.TeklifEntity)
], YapilanlarEntity.prototype, "teklif", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], YapilanlarEntity.prototype, "adet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilanlarEntity.prototype, "parcaAdi", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], YapilanlarEntity.prototype, "fiyat", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], YapilanlarEntity.prototype, "toplamFiyat", null);
exports.YapilanlarEntity = YapilanlarEntity = __decorate([
    (0, typeorm_1.Entity)('yapilanlar')
], YapilanlarEntity);
//# sourceMappingURL=yapilanlar.entity.js.map