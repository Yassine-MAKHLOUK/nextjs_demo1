import { FC } from "react";
import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

const Document : FC<DocumentProps> = () => {
    return(
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
};

export default Document;