import { ReactNode } from "react";

export function Wrapper(page: ReactNode) {
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

            {page}
        </main>
    )
}