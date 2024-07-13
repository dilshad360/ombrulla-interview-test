import BagIcon from "../assets/svgs/bag.svg";
import PlayIcon from "../assets/svgs/play.svg";
import HeroImage1 from "../assets/images/hero-1.png";
import HeroImage2 from "../assets/images/hero-2.png";
import HeroImage3 from "../assets/images/hero-3.png";
import HeroFull from "../assets/images/hero-full.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

function Hero() {
    return (
        <div className="flex flex-col lg:flex-row px-4 md:px-16 lg:px-40 py-8 min-h-[calc(100vh-6rem)] ">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-2/5 text-center lg:text-left animated fadeIn">
            <img className="flex lg:hidden" src={HeroFull} alt="HeroImageFull" />
                <div className="flex items-center justify-center w-fit shadow-2xl leading-none gap-3 text-secondary px-6 py-3 rounded-xl text-sm">
                    Explore the world! <img src={BagIcon} alt="bag-icon" />{" "}
                </div>
                <h1 className="text-[65px] leading-[70px] pt-10">
                    Travel <span className="text-secondary">top destination</span> of the
                    world
                </h1>
                <p className="text-gray-400 thin-text pt-10">
                    We always make our customer happy by providing <br />
                    as many choices as possible{" "}
                </p>
                <div className="pt-10 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button className="bg-primary text-white px-6 py-3 rounded-3xl hover:opacity-70 transition-opacity ease-in-out shadow-xl">
                        Get Started
                    </button>
                    <button className="flex justify-center leading-none items-center gap-2 px-6 py-3 rounded-3xl hover:opacity-70 transition-opacity ease-in-out border animate-pulse">
                        <img src={PlayIcon} alt="bag-icon" /> Watch Demo
                    </button>
                </div>
            </div>
            <MouseParallaxContainer  globalFactorX={1} globalFactorY={1} className="relative w-3/5  px-6 mb-10 hidden lg:flex  justify-center">
                <MouseParallaxChild  className="absolute "  factorX={0.03} factorY={0.05}>
                <img
                    src={HeroImage3}
                    width={640}
                    alt="Image 3"
                    className="object-contain "
                />
                </MouseParallaxChild>
                <MouseParallaxChild  className="absolute top-16" factorX={0.07} factorY={0.08}>
                <img
                    src={HeroImage2}
                    width={420}
                    alt="Image 2"
                    className="w-4/5 sm:w-[420px] object-contain"
                />
                </MouseParallaxChild>
                <MouseParallaxChild  className="absolute top-36" factorX={0.02} factorY={0.03}>
                <img
                    src={HeroImage1}
                    width={580}
                    alt="Image 1"
                    className=" bottom-0 left-1/2  object-contain"
                />
                </MouseParallaxChild>
                </MouseParallaxContainer>
        </div>
    );
}

export default Hero;
