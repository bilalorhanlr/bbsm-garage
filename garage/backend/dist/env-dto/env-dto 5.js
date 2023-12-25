"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvDto = void 0;
const dotenv = require("dotenv");
class EnvDto {
    constructor() {
        dotenv.config();
        this.DB_HOST = process.env.DB_HOST;
        this.DB_PORT = process.env.DB_PORT;
        this.DB_USER = process.env.DB_USERNAME;
        this.DB_PASS = process.env.DB_PASSWORD;
        this.DB_NAME = process.env.DB_DATABASE;
    }
}
exports.EnvDto = EnvDto;
//# sourceMappingURL=env-dto.js.map