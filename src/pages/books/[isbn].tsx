import { Wrapper } from "@/components"
import { useRouter } from "next/router"

export default function Book() {
    const router = useRouter()

    return <p>Livro - {router.query.isbn}</p>
}

Book.getWrapper = Wrapper