"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Queries/User");
const User_2 = require("./Mutations/User");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: User_1.GET_ALL_USERS,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: User_2.CREATE_USER,
        deleteUser: User_2.DELETE_USER,
        updateUser: User_2.UPDATE_NAME,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
