import { Wrapper } from "@/components"
import { IBook } from "@/mocks/book"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"

export const getStaticProps = (async () => {
    const res = await fetch(`http://localhost:3000/api/books`)
    const books = await res.json()

    return { props: { books }}
}) satisfies GetStaticProps<{ books: IBook[] }>

export default function Books({ books }: InferGetStaticPropsType<typeof getStaticProps>) {
    const columns = Object.keys(books[0])
    const rows = books.map((book: IBook) => Object.values(book))

    const router = useRouter()

    function navigateToBookDetailsPage(isbn: string) {
        router.push(`/books/${isbn}`)
    }

    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
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
                            <tr key={index} onClick={() => navigateToBookDetailsPage(row[2])}>
                                {row.map(book => (
                                    <td key={book} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {book}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Books.getWrapper = Wrapper