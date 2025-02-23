"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        nombres: { type: graphql_1.GraphQLString },
        Apaterno: { type: graphql_1.GraphQLString },
        Amaterno: { type: graphql_1.GraphQLString },
        telefono: { type: graphql_1.GraphQLString },
        direccion: { type: graphql_1.GraphQLString },
    }),
});
