import { Wrapper } from "@/components"
import { IBook } from "@/mocks/book"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Book() {
    const [book, setBook] = useState<IBook>({} as IBook)
    const [loading, setLoading] = useState(false)
    
    const router = useRouter()

    useEffect(() => {
        setLoading(true)

        fetch(`http://localhost:3000/api/books/${router.query.isbn}`)
            .then(res => res.json())
            .then(data => setBook(data))
            .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <p>loading...</p>

    return (
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                {Object.entries(book).map((item, index) => (
                    <div key={index} className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{item[0]}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{item[1]}</dd>
                    </div>))}
            </dl>
        </div>
    )
}

Book.getWrapper = Wrapper