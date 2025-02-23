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
exports.DELETE_USER = exports.UPDATE_NAME = exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        nombres: { type: graphql_1.GraphQLString },
        Apaterno: { type: graphql_1.GraphQLString },
        Amaterno: { type: graphql_1.GraphQLString },
        telefono: { type: graphql_1.GraphQLString },
        direccion: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombres, Apaterno, Amaterno, telefono, direccion } = args;
            yield Users_1.Users.insert({ nombres, Apaterno, Amaterno, telefono, direccion });
            return args;
        });
    },
};
exports.UPDATE_NAME = {
    type: Messages_1.MessageType,
    args: {
        nombres: { type: graphql_1.GraphQLString },
        Apaterno: { type: graphql_1.GraphQLString },
        Amaterno: { type: graphql_1.GraphQLString },
        telefono: { type: graphql_1.GraphQLString },
        direccion: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombres, Apaterno, Amaterno, telefono, direccion } = args;
            const user = yield Users_1.Users.findOne(nombres);
            if (!user) {
                throw new Error("El usuario no existe");
            }
            yield Users_1.Users.update(nombres, { nombres, Apaterno, Amaterno, telefono, direccion });
            return { successful: true, message: "Usuario actualizado" };
        });
    },
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = args.id;
            yield Users_1.Users.delete(id);
            return { successful: true, message: "Borrado exitosamente" };
        });
    },
};
