import { FC } from "react";

interface HeroProps {
    title: string;
    subTitle: string;
}

const Hero :FC<HeroProps> = ({title, subTitle}) => (
    <section className="hero">
        <div className="hero_container">
            <div className="hero_title">
                <h1>{title}</h1>
                <span className="hero_subTitle">{ subTitle }</span>
            </div>
            <div className="hero_cta">
                <a href="#" className="cta_btn">Get started</a>
                <a href="/contact" className="cta_btn">Contact us</a>
            </div>
        </div>
    </section>
)
export default Hero;