import LeftArrowIcon from "../assets/svgs/left-arrow.svg";
import RightArrowIcon from "../assets/svgs/right-arrow.svg";
import { destinations } from "../const";
import Card from "./Card";


function TopDestination() {


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
