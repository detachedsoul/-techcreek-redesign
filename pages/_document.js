import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preload" href="/fonts/fonts.min.css" as="style" />
                    <link rel="icon" href="/img/logo.png" />
                </Head>
                <body className="font-mulish bg-slate-900 text-slate-400 antialiased tracking-wide selection:bg-default-blue selection:text-white break-words scroll-smooth">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;