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
exports.YapilanlarController = void 0;
const common_1 = require("@nestjs/common");
const yapilanlar_service_1 = require("./yapilanlar.service");
const create_yapilanlar_dto_1 = require("./dto/create-yapilanlar.dto");
const update_yapilanlar_dto_1 = require("./dto/update-yapilanlar.dto");
let YapilanlarController = class YapilanlarController {
    constructor(yapilanlarService) {
        this.yapilanlarService = yapilanlarService;
    }
    create(createYapilanlarDto) {
        return this.yapilanlarService.create(createYapilanlarDto);
    }
    findAll() {
        return this.yapilanlarService.findAll();
    }
    findOne(id) {
        return this.yapilanlarService.findOne(+id);
    }
    update(id, updateYapilanlarDto) {
        return this.yapilanlarService.update(+id, updateYapilanlarDto);
    }
    remove(id) {
        return this.yapilanlarService.remove(+id);
    }
};
exports.YapilanlarController = YapilanlarController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_yapilanlar_dto_1.CreateYapilanlarDto]),
    __metadata("design:returntype", void 0)
], YapilanlarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], YapilanlarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], YapilanlarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_yapilanlar_dto_1.UpdateYapilanlarDto]),
    __metadata("design:returntype", void 0)
], YapilanlarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], YapilanlarController.prototype, "remove", null);
exports.YapilanlarController = YapilanlarController = __decorate([
    (0, common_1.Controller)('yapilanlar'),
    __metadata("design:paramtypes", [yapilanlar_service_1.YapilanlarService])
], YapilanlarController);
//# sourceMappingURL=yapilanlar.controller.js.map