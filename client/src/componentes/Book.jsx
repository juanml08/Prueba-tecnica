import "./book.css";

export default function Book(props) {
  const { titulo, autor, anio_publicacion, genero_id } = props.book;

  const renderGenre = () => {
    const genre = props.genres.find((genre) => genre.id == genero_id);
    return (
      <div className="container_titles">
        <p>
          <span>Genero:</span> {genre?.nombre}
        </p>
      </div>
    );
  };

  const processDeleteBook = (bookId) => {
    fetch(`http://localhost:3000/libros/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((numberDeletedBooks) => {
        if (numberDeletedBooks === 1) {
          props.handleDeleteBook(bookId);
        } else {
          alert("Libro no eliminado");
        }
      });
  };

  return (
    <div className="container_card_book">
      <h2>{titulo}</h2>
      <div className="">
        <div className="container_titles">
          <p className="">
            <span>Autor: </span>
            {autor}
          </p>
        </div>
        <div className="container_titles">
          <p className="">
            <span>Año de Publicación: </span> {anio_publicacion}
          </p>
        </div>
        <div>{props.genres?.length && renderGenre()}</div>
      </div>
      <div className="container_btns">
        <button onClick={() => props.handleSelectedBook(props.book)}>
          Editar
        </button>
        <button
          className="btn_delete"
          onClick={() => processDeleteBook(props.book.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
