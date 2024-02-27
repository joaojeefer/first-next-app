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