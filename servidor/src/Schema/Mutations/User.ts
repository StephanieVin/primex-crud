import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";

export const CREATE_USER = {
  type: UserType,
  args: {
    nombres: { type: GraphQLString },
    Apaterno: { type: GraphQLString },
    Amaterno: { type: GraphQLString },
    telefono: { type: GraphQLString },
    direccion: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { nombres, Apaterno, Amaterno, telefono, direccion } = args;
    await Users.insert({ nombres, Apaterno, Amaterno, telefono, direccion });
    return args;
  },
};

//Esta opción es para actualizar solo el nombre del usuario seleccionado
//Se deben agregar más campos para actualizar otros datos
export const UPDATE_USER = {
  type: MessageType,
  args: {
    nombres: { type: GraphQLString },
    Apaterno: { type: GraphQLString },
    Amaterno: { type: GraphQLString },
    telefono: { type: GraphQLString },
    direccion: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {nombres, Apaterno, Amaterno, telefono, direccion } = args;
    const user = await Users.findOne(nombres);

    if (!user) {
      throw new Error("El usuario no existe");
    }
    await Users.update(nombres, { nombres, Apaterno, Amaterno, telefono, direccion });

    return { successful: true, message: "Usuario actualizado" };
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Users.delete(id);

    return { successful: true, message: "Borrado exitosamente" };
  },
};
