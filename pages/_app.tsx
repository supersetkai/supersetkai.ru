// Components
// Компоненты
import { AppProps } from 'next/app';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import Router from "next/router";
import Head from 'next/head';
import Layout from '../components/layout';

// SCSS/SASS
import '../styles/components/footer.scss';
import '../styles/components/header.scss';
import '../styles/components/layout.scss';
import '../styles/components/scrollbar.scss';
import '../styles/components/selection.scss';

// NProgress
import NProgress from "nprogress";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={{
                colorScheme: 'dark',
                colors: {
                    // override dark colors to change them for all components
                    dark: [
                      '#C1C2C5',
                      '#acaebf',
                      '#909296',
                      '#666980',
                      '#19191a',
                      '#34354a',
                      '#000000',
                      '#000000',
                      '#060606',
                      '#01010a',
                    ],
                },
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <Head>
                    <title>KAI Superset</title>
                </Head>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default MyApp;