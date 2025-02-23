"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const typeorm_1 = require("typeorm");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        //AGREGAR LOS DATOS DE CONEXION A LA BASE DE DATOS  MYSQL LOCAL
        type: 'mysql',
        username: 'root',
        password: 'password123',
        host: 'localhost',
        database: 'primex-crud',
        entities: [],
        synchronize: true,
        ssl: false
    });
});
exports.connectDB = connectDB;
