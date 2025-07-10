// Pruebas
const BooksService = require('./books.service');

// Datos simulados (definidos ANTES de usarlos)
const fakeBooks = [
  {
    _id: 1,
    name: 'El libro troll del Rubius'
  }
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: (book) => ({ ...book, _id: Date.now() })
};

// Mock
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      expect(books.length).toEqual(1);
    });
  });

  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      const newBook = {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      };

      const createdBook = await service.createBook(newBook);

      expect(createdBook).toMatchObject({
        _id: expect.any(Number),
        title: '1984',
        author: 'George Orwell',
        year: 1949
      });
    });
  });
});
