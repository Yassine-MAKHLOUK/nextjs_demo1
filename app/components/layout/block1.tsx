import { FC } from "react";

interface Block1Props {
    title: string;
    text: string;
}

const Block1 :FC<Block1Props> = ({title, text}) => (
    <section>
        <div className="block1_container">
            <div className="block1_title">
                <h2>{title}</h2>
            </div>
            <div className="block1_content">
                <div className="block1_text">
                    { text }
                </div>
            </div>
        </div>
    </section>
)
export default Block1;