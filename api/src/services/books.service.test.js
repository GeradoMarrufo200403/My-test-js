// Pruebas
const BooksService = require('./books.service');

const MongoLibStup = {
  getAll: () => [...fakeBooks],
  create: (book) => ({ ...book, _id: Date.now() }) 
};

// Datos simulados 
const fakeBooks = [
  {
    _id: 1,
    name: 'El libro troll del Rubius'
  }
];

// Mock 1
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStup));

describe('Test for BooksService', () => {
  let service;
  
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
    });
  });

  // Crear libro ACT2
  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      const newBook = {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      };

      const createdBook = await service.createBook(newBook);

      expect(createdBook).toBeDefined();
      expect(createdBook._id).toBeDefined();
      expect(createdBook.title).toBe(newBook.title);
    });
  });
});