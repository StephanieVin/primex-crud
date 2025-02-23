import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $nombres: String!
    $Apaterno: String!
    $Amaterno: String!
    $telefono: String!
    $direccion: String!
  ) {
    createUser(
      nombres: $nombres
      Apaterno: $Apaterno
      Amaterno: $Amaterno
      telefono: $telefono
      direccion: $direccion
    ) {
      id
      nombres
      Apaterno
      Amaterno
      telefono
      direccion
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $nombres: String!
    $Apaterno: String!
    $Amaterno: String!
    $telefono: String!
    $direccion: String!
  ) {
    updateUser(
      id: $id
      nombres: $nombres
      Apaterno: $Apaterno
      Amaterno: $Amaterno
      telefono: $telefono
      direccion: $direccion
    ) {
      id
      nombres
      Apaterno
      Amaterno
      telefono
      direccion
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
