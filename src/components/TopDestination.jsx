import LeftArrowIcon from "../assets/svgs/left-arrow.svg";
import RightArrowIcon from "../assets/svgs/right-arrow.svg";
import Card from "./Card";

import Dest1 from "../assets/images/dest-1.png";
import Dest2 from "../assets/images/dest-2.jpg";
import Dest3 from "../assets/images/dest-3.jpg";

function TopDestination() {

    const destinations = [
        {
            title: "Paradise Beach, Bantayan Island",
            place: "Rome, Italy",
            price: "550.16",
            rating: "4.8",
            image: Dest1,
        },
        {
            title: "Ocean with full of Colors",
            place: "Maldives",
            price: "20.99",
            rating: "4.5",
            image: Dest2,
        },
        {
            title: "Mountain View, Above the cloud",
            place: "United Arab Emeries ",
            price: "150.99",
            rating: "5.0",
            image: Dest3,
        },
    ];

    return (
        <div className="px-4 md:px-16 lg:px-40 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="text-center lg:text-left">
                    <h6 className="text-secondary">TOP DESTINATION</h6>
                    <h3 className="text-4xl pt-2">Explore top destination</h3>
                </div>
                <div className="flex space-x-4 pt-4 lg:pt-0">
                    <button className="border rounded-full p-5 w-16 h-16">
                        <img src={LeftArrowIcon} alt="left-arrow" />
                    </button>
                    <button className="bg-primary rounded-full p-6 w-16 h-16">
                        <img src={RightArrowIcon} alt="right-arrow" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center gap-6 pt-10 ">
                {destinations.map((destination, index) => (
                    <Card key={index} data={destination} />
                ))}
            </div>
        </div>
    );
}

export default TopDestination;
