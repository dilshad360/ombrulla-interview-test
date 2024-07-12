import BagIcon from "../assets/svgs/bag.svg";
import PlayIcon from "../assets/svgs/play.svg";
import HeroImage1 from "../assets/images/hero-1.png";
import HeroImage2 from "../assets/images/hero-2.png";
import HeroImage3 from "../assets/images/hero-3.png";

function Hero() {
    return (
        <div className="flex flex-col lg:flex-row px-4 md:px-16 lg:px-40 py-8 min-h-[calc(100vh-6rem)]">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-2/5 text-center lg:text-left">
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
                    <button className="flex justify-center leading-none items-center gap-2 px-6 py-3 rounded-3xl hover:opacity-70 transition-opacity ease-in-out border">
                        <img src={PlayIcon} alt="bag-icon" /> Watch Demo
                    </button>
                </div>
            </div>
            <div className="relative w-full order-first lg:order-last lg:w-3/5 min-h-[calc(64vh-6rem)] sm:min-h-[calc(80vh-6rem)] px-6 mb-10">
                <img
                    src={HeroImage3}
                    width={640}
                    alt="Image 1"
                    className="absolute top-0 left-1/2 -translate-x-1/2 object-contain"
                />
                <img
                    src={HeroImage2}
                    width={420}
                    alt="Image 1"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 sm:w-[420px] object-contain"
                />
                <img
                    src={HeroImage1}
                    width={580}
                    alt="Image 1"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2  object-contain"
                />
            </div>
        </div>
    );
}

export default Hero;
