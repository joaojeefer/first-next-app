import { IBook, books } from "@/mocks/book";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<IBook>) {
    const { isbn } = req.query

    const book = books.find(b => b.isbn === isbn)
    if (book) {
        res.status(200).send(book)
    }
}