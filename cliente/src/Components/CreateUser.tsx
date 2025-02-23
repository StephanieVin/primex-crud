import React, { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function CreateUser() {
  const [nombres, setNombres] = useState("");
  const [Apaterno, setApaterno] = useState("");
  const [Amaterno, setAmaterno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="createUser">
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
          createUser({
            variables: {
              nombres: nombres,
              Apaterno: Apaterno,
              Amaterno: Amaterno,
              telefono: telefono,
              direccion: direccion,
            },
          });
        }}
      >
        Crear
      </button>
      {error && <p>Error creating user: {error.message}</p>}
    </div>
  );
}

export default CreateUser;
