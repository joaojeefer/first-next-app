import { IBook, books } from "@/mocks/book";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<IBook[]>) {
    res.status(200).send(books)
}