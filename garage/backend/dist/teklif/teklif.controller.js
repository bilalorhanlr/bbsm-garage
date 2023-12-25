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
exports.TeklifController = void 0;
const common_1 = require("@nestjs/common");
const teklif_service_1 = require("./teklif.service");
const update_teklif_dto_1 = require("./dto/update-teklif.dto");
const teklif_entity_1 = require("./entities/teklif.entity");
let TeklifController = class TeklifController {
    constructor(teklifService) {
        this.teklifService = teklifService;
    }
    create(createTeklifDto) {
        return this.teklifService.create(createTeklifDto);
    }
    findAll() {
        return this.teklifService.findAll();
    }
    findOne(id) {
        return this.teklifService.findOne(+id);
    }
    update(id, updateTeklifDto) {
        return this.teklifService.update(+id, updateTeklifDto);
    }
    remove(id) {
        return this.teklifService.remove(+id);
    }
};
exports.TeklifController = TeklifController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teklif_entity_1.TeklifEntity]),
    __metadata("design:returntype", void 0)
], TeklifController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeklifController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeklifController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teklif_dto_1.UpdateTeklifDto]),
    __metadata("design:returntype", void 0)
], TeklifController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeklifController.prototype, "remove", null);
exports.TeklifController = TeklifController = __decorate([
    (0, common_1.Controller)('teklif'),
    __metadata("design:paramtypes", [teklif_service_1.TeklifService])
], TeklifController);
//# sourceMappingURL=teklif.controller.js.map