import React from "react";
import { useEffect, useState } from "react";
import "./formBook.css";

export default function FormBook(props) {
  const { selectedBook, handleCreateBook, handleUpdateBook } = props;

  const [formValues, setFormValues] = useState({
    id: "",
    titulo: "",
    autor: "",
    anio_publicacion: "",
    genero_id: "",
  });

  useEffect(() => {
    if (selectedBook) {
      setFormValues({
        id: selectedBook.id,
        titulo: selectedBook.titulo,
        autor: selectedBook.autor,
        anio_publicacion: selectedBook.anio_publicacion,
        genero_id: selectedBook,
      });
    } else {
      setFormValues({
        id: "",
        titulo: "",
        autor: "",
        anio_publicacion: "",
        genero_id: "",
      });
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/libros", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((newBook) => handleCreateBook(newBook));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/libros/${formValues.id}`, {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((numberUpdatedBooksArray) => {
        if (numberUpdatedBooksArray[0] === 1) {
          handleUpdateBook(formValues);
        }
      });
  };

  const handleChange = (e) => {
    const newInputState = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(newInputState);
  };

  return (
    <div className="form_book">
      <h2>{formValues.id ? "Editar libro" : "Crear libro"}</h2>
      <form onSubmit={props.selectedBook ? handleUpdate : handleSubmit}>
        <div className="field_container">
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            name="titulo"
            onChange={handleChange}
            defaultValue={formValues.titulo}
          />
        </div>
        <div className="field_container">
          <label htmlFor="">Autor</label>
          <input
            type="text"
            name="autor"
            onChange={handleChange}
            defaultValue={formValues.autor}
          />
        </div>
        <div className="field_container">
          <label htmlFor="">Año de publicación</label>
          <input
            type="text"
            name="anio_publicacion"
            onChange={handleChange}
            defaultValue={formValues.anio_publicacion}
          />
        </div>
        <div className="field_container">
          <label htmlFor="">Género:</label>
          <select onChange={handleChange} name="genero_id">
            <option>---</option>
            {props.genres.map((option) => (
              <option key={option.id} value={option.id}>
                {option.nombre}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="field_container">
          <input
            className="btn_save"
            type="submit"
            value={formValues.id ? "Guardar" : "Crear"}
          />
        </div>
      </form>
    </div>
  );
}
