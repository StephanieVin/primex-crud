import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    nombres: { type: GraphQLString },
    Apaterno: { type: GraphQLString },
    Amaterno: { type: GraphQLString },
    telefono: { type: GraphQLString },
    direccion: { type: GraphQLString },
  }),
});
