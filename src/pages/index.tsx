import { books } from '../mocks/book'

const columns = Object.keys(books[0])
const rows = books.map(book => Object.values(book))

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col p-2 bg-gray-50`}>
            {/* header begins */}
            <header>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="text-center sm:text-left sm:mr-10">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Biblioteca do João</h1>

                            <p className="mt-1 text-sm text-gray-400">Este sistema gerencia um acervo de livros</p>
                        </div>

                        {/* <div className="relative">
                            <input
                                type="text"
                                id="Search"
                                placeholder="Encontre o livro..."
                                className="w-full rounded-md border-gray-200 py-3 pl-2 shadow-sm sm:text-sm"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button type="button" className="text-gray-600 hover:text-gray-700">
                                    <span className="sr-only">Search</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div> */}

                        {/* <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <button
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                            >
                            <span className="text-sm font-medium"> View Website </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            </button>

                            <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                            >
                            Create Post
                            </button>
                        </div> */}
                    </div>
                </div>
            </header>
            {/* header ends */}

            <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                    {/* table begins */}
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                {columns.map(column => (
                                    <th key={column} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{column}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    {row.map(book => (
                                        <td key={book} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {book}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* table ends */}
                </div>
            </div>
        </main>
    )
}