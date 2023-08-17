const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("GET /libros", () => {
  test("should return a list of books ", async () => {
    const response = await api.get("/libros").expect(200);

    // Verificar que la respuesta sea un array de objetos
    // Verificar las propiedades de cada libro en el array
    response.body.forEach((book) => {
      expect(book.anio_publicacion).toEqual(expect.any(Number));
      expect(book.autor).toEqual(expect.any(String));
      expect(book.genero_id).toEqual(expect.any(Number));
      expect(book.id).toEqual(expect.any(Number));
      expect(book.titulo).toEqual(expect.any(String));
    });
  });
});

describe("POST /libros", () => {
  test("should add a new book", async () => {
    const newBook = {
      titulo: "New Book",
      autor: "John Doe",
      anio_publicacion: 2023,
      genero_id: 1,
    };

    const response = await api.post("/libros").send(newBook).expect(200);

    expect(response.body).toEqual(expect.objectContaining(newBook));
  });
});

describe("DELETE /libros/:id", () => {
  test("should delete the first book in the list", async () => {
    // Obtener la lista de libros primero
    const responseList = await api.get("/libros").expect(200);

    // Obtener el ID del primer libro de la lista
    const bookIdToDelete = responseList.body[0].id;

    const response = await api.delete(`/libros/${bookIdToDelete}`).expect(200);
  });
});
