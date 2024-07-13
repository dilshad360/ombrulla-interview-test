import TravelImage from "../assets/images/travel.png";
import { stats } from "../const";

function TravelPoint() {



    return (
        <div className="flex flex-col lg:flex-row items-center pr-4 md:pr-16 lg:pr-40 pl-4 md:pl-16 lg:pl-0 py-8 ">
            <img src={TravelImage} alt="travel-image" />
            <div>
                <div className="text-center lg:text-left pt-8 lg:pt-0">
                    <h6 className="text-secondary">TOP DESTINATION</h6>
                    <h3 className="text-4xl pt-2">Explore top destination</h3>
                    <p className="thin-text pt-4 text-gray-400">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                        {stats.map((item) => (
                            <div className="p-8 border rounded-3xl text-center" key="sd">
                            <h4 className="text-3xl text-orange-600">{item.value}</h4>
                            <p>{item.title}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelPoint;
