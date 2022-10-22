// Components
// Компоненты
import { AppProps } from "next/app";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { RouterTransition } from "../components/transition";
import Head from "next/head";
import Layout from "../components/layout";

// SCSS/SASS
import '../styles/components/footer.scss';
import '../styles/components/header.scss';
import '../styles/components/layout.scss';
import '../styles/components/scrollbar.scss';
import '../styles/components/selection.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={{
                colorScheme: 'dark',
                colors: {
                    // Override dark colors to change them for all components
                    // Переопределение темных цветов для изменения их для всех компонентов

                    // Later I will add a theme switcher
                    // Позже я добавлю переключатель темы

                    // Not all colors are overriden from mantine.dev sample
                    // Не все цвета переопределены из примера mantine.dev
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
            <RouterTransition />
            <NotificationsProvider>
                <Head>
                    <title>Суперсет КАИ</title>
                </Head>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </NotificationsProvider>
        </MantineProvider>
    );
}