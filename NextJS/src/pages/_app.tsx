import WebVitalsMonitor from '@/components/WebVitalsMonitor'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, Suspense } from 'react'

import '@/common/styles.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const router = useRouter();
	const path = router.pathname.substring(1);
	return (
		<>
			<Head>
				<link rel="icon" href="data:," />
				<title>{`Sailoogle - ${path}`}</title>
				<meta
					name="description"
					content=""
					key="desc"
				/>
			</Head>
			<WebVitalsMonitor></WebVitalsMonitor>
			<Suspense fallback={"Loading Data..."}>
				<Component {...pageProps} />
			</Suspense>
		</>
	)
}