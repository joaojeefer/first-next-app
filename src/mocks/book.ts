interface ILivro {
    isbn: string;
    title: string;
    synopsis?: string;
    authors: string[];
    edition: string;
    category: string;
    publisher: string;
    publishedAt?: number;
    language?: string;
    quantityAvailable: number;
    quantityTotal: number;
    status: string;
}

const books: ILivro[] = [
    {
        title: "A Revolução dos Bichos",
        authors: ["George Orwell"],
        isbn: "978-0451526342",
        publisher: "Penguin Books",
        category: "Ficção Política",
        synopsis: "Uma sátira política sobre uma revolução dos animais contra os humanos.",
        publishedAt: 1945,
        edition: "1ª edição",
        language: "Inglês",
        quantityAvailable: 5,
        quantityTotal: 10,
        status: "Disponível"
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        authors: ["J.R.R. Tolkien"],
        isbn: "978-0345339706",
        publisher: "Mariner Books",
        category: "Fantasia",
        synopsis: "A primeira parte da trilogia épica sobre a jornada para destruir um anel mágico.",
        publishedAt: 1954,
        edition: "1ª edição",
        language: "Inglês",
        quantityAvailable: 8,
        quantityTotal: 12,
        status: "Disponível"
    },
    {
        title: "Harry Potter e a Pedra Filosofal",
        authors: ["J.K. Rowling"],
        isbn: "978-8532530794",
        publisher: "Rocco",
        category: "Fantasia",
        synopsis: "O primeiro livro da série Harry Potter, que narra as aventuras do jovem bruxo Harry Potter.",
        publishedAt: 1997,
        edition: "1ª edição",
        language: "Português",
        quantityAvailable: 10,
        quantityTotal: 15,
        status: "Disponível"
    },
    {
        title: "1984",
        authors: ["George Orwell"],
        isbn: "978-0451524935",
        publisher: "Signet Classic",
        category: "Ficção Distópica",
        synopsis: "Um clássico da ficção distópica que retrata um regime totalitário e vigilância governamental extrema.",
        publishedAt: 1949,
        edition: "1ª edição",
        language: "Inglês",
        quantityAvailable: 6,
        quantityTotal: 8,
        status: "Disponível"
    },
    {
        title: "O Pequeno Príncipe",
        authors: ["Antoine de Saint-Exupéry"],
        isbn: "978-8576570716",
        publisher: "Agir",
        category: "Fábula",
        synopsis: "Um clássico da literatura infantojuvenil que aborda temas como amizade, amor e responsabilidade.",
        publishedAt: 1943,
        edition: "1ª edição",
        language: "Português",
        quantityAvailable: 4,
        quantityTotal: 6,
        status: "Disponível"
    }
  ];

export { books }