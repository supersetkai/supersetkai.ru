import Header from './header';
import Footer from './footer';

type Props = {
    children: JSX.Element;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}