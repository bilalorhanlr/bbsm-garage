"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeklifModule = void 0;
const common_1 = require("@nestjs/common");
const teklif_service_1 = require("./teklif.service");
const teklif_controller_1 = require("./teklif.controller");
const teklif_entity_1 = require("./entities/teklif.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TeklifModule = class TeklifModule {
};
exports.TeklifModule = TeklifModule;
exports.TeklifModule = TeklifModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([teklif_entity_1.TeklifEntity])],
        controllers: [teklif_controller_1.TeklifController],
        providers: [teklif_service_1.TeklifService],
    })
], TeklifModule);
//# sourceMappingURL=teklif.module.js.map