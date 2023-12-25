"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const env_dto_1 = require("./env-dto/env-dto");
const typeorm_1 = require("@nestjs/typeorm");
const console_1 = require("console");
const auth_module_1 = require("./auth/auth.module");
const card_module_1 = require("./card/card.module");
const stok_module_1 = require("./stok/stok.module");
const teklif_module_1 = require("./teklif/teklif.module");
const yapilanlar_module_1 = require("./yapilanlar/yapilanlar.module");
let env = new env_dto_1.EnvDto();
(0, console_1.log)(env);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: env.DB_HOST,
                port: 5432,
                username: env.DB_USER,
                password: env.DB_PASS,
                database: env.DB_NAME,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            card_module_1.CardModule,
            stok_module_1.StokModule,
            teklif_module_1.TeklifModule,
            yapilanlar_module_1.YapilanlarModule,
        ],
        controllers: [],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map