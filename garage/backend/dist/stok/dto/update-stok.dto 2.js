"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStokDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stok_dto_1 = require("./create-stok.dto");
class UpdateStokDto extends (0, mapped_types_1.PartialType)(create_stok_dto_1.CreateStokDto) {
}
exports.UpdateStokDto = UpdateStokDto;
//# sourceMappingURL=update-stok.dto.js.map