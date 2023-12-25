"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapilanlarModule = void 0;
const common_1 = require("@nestjs/common");
const yapilanlar_service_1 = require("./yapilanlar.service");
const yapilanlar_controller_1 = require("./yapilanlar.controller");
const typeorm_1 = require("@nestjs/typeorm");
const yapilanlar_entity_1 = require("./entities/yapilanlar.entity");
let YapilanlarModule = class YapilanlarModule {
};
exports.YapilanlarModule = YapilanlarModule;
exports.YapilanlarModule = YapilanlarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([yapilanlar_entity_1.YapilanlarEntity])],
        controllers: [yapilanlar_controller_1.YapilanlarController],
        providers: [yapilanlar_service_1.YapilanlarService],
    })
], YapilanlarModule);
//# sourceMappingURL=yapilanlar.module.js.map