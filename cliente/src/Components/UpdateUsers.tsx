import React, { useState } from "react";
import { UPDATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdateUser() {
  const [id, setId] = useState("");
  const [nombres, setNombres] = useState("");
  const [Apaterno, setApaterno] = useState("");
  const [Amaterno, setAmaterno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  if (error) {
    return <h1> {error.message} </h1>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Nombres"
        onChange={(event) => {
          setNombres(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Apellido Paterno"
        onChange={(event) => {
          setApaterno(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Apellido Materno"
        onChange={(event) => {
          setAmaterno(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Teléfono"
        onChange={(event) => {
          setTelefono(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Dirección"
        onChange={(event) => {
          setDireccion(event.target.value);
        }}
      />
      <button
        onClick={() => {
          updateUser({
            variables: {
              id: id,
              nombres: nombres,
              Apaterno: Apaterno,
              Amaterno: Amaterno,
              telefono: telefono,
              direccion: direccion,
            },
          });
        }}
      >
        ACTUALIZAR
      </button>
    </div>
  );
}

export default UpdateUser;