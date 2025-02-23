"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const app = express_1.default();
app.use("/graphql", express_graphql_1.graphqlHTTP({
    graphiql: true,
    schema: Schema_1.schema,
}));
exports.default = app;
