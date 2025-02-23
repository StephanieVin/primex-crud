import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      nombres
      Apaterno
      Amaterno
      telefono
      direccion
    }
  }
`;