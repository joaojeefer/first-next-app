import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithWrapper<P = {}, IP = P> = NextPage<P, IP> & {
  getWrapper?: (page: ReactElement) => ReactNode
}

type AppPropsWithWrapper = AppProps & { Component: NextPageWithWrapper }

export default function App({ Component, pageProps }: AppPropsWithWrapper) {
  const getWrapper = Component.getWrapper ?? (page => page)

  return getWrapper(<Component {...pageProps} />)
}
