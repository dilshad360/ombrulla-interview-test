import DestinationIcon from "../assets/svgs/services/dest.svg";
import BookingIcon from "../assets/svgs/services/booking.svg";
import CloudIcon from "../assets/svgs/services/cloud.svg";

function Services() {
    return (
        <div className="px-4 md:px-16 lg:px-40 py-8 flex flex-col lg:flex-row items-center">
            <div className="text-center lg:text-left w-full lg:w-2/3 pr-4">
                <h6 className="text-secondary">SERVICES</h6>
                <h3 className="text-4xl pt-2">Our top value categories for you</h3>
            </div>
            <div className="flex flex-col pt-10 lg:p-0 sm:flex-row gap-4">
                <div className="px-6 py-16 sm:w-1/3 border rounded-2xl text-center flex flex-col justify-center items-center">
                    <img src={DestinationIcon} alt="" />
                    <h5 className="text-2xl pt-10">Best Tour Guide</h5>
                    <p className="thin-text pt-4 text-gray-400">
                        What looked like a small patch of purple grass, above five feet.
                    </p>
                </div>
                <div className="px-6 py-16 sm:w-1/3 shadow-2xl rounded-2xl text-center flex flex-col justify-center items-center">
                    <img src={BookingIcon} alt="" />
                    <h5 className="text-2xl pt-10">Easy Booking</h5>
                    <p className="thin-text pt-4 text-gray-400">
                        Square, was moving across the sand in their direction
                    </p>
                </div>
                <div className="px-6 py-16 sm:w-1/3 border rounded-2xl text-center flex flex-col justify-center items-center">
                    <img src={CloudIcon} alt="" />
                    <h5 className="text-2xl pt-10">Weather Forecast</h5>
                    <p className="thin-text pt-4 text-gray-400">
                        What looked like a small patch of purple grass, above five feet
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
