import { FC } from "react";
import Image from "next/image"

interface Block2Props {
    title: string;
    text: string;
    blockPic: string;
}

const Block2 :FC<Block2Props> = ({title, text, blockPic}) => (
    <section>
        <div className="block2_container">
            <div className="block2_title">
                <h2>{title}</h2>
            </div>
            <div className="block2_content">
                <div className="block2_image">
                <Image
                    src={blockPic}
                    alt="Block image"
                    layout="responsive" // Make image responsive
                    width={500}
                    height={500}
                    quality={100}
                    style={{objectFit: 'cover',}}
                />
                </div>
                <div className="block2_text">
                    { text }
                </div>
            </div>
        </div>
    </section>
)
export default Block2;