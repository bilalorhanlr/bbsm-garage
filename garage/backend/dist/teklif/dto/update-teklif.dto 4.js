"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeklifDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_teklif_dto_1 = require("./create-teklif.dto");
class UpdateTeklifDto extends (0, mapped_types_1.PartialType)(create_teklif_dto_1.CreateTeklifDto) {
}
exports.UpdateTeklifDto = UpdateTeklifDto;
//# sourceMappingURL=update-teklif.dto.js.map