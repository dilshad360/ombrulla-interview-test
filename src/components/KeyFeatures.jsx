import FeatureImage from '../assets/images/key-feature.png'
import LocationIcon from '../assets/svgs/features/location.svg'
import CalendarIcon from '../assets/svgs/features/cal.svg'
import TicketIcon from '../assets/svgs/features/ticket.svg' 

function KeyFeatures() {
  return (
    <div className="flex flex-col lg:flex-row items-center pl-4 md:pl-16 lg:pl-40 pr-4 md:pr-16 lg:pr-0 py-8">
        <div className="text-center lg:text-left pt-8 lg:pt-0">
                    <h6 className="text-secondary uppercase">Key features</h6>
                    <h3 className="text-4xl pt-2">We offer best services</h3>
                    <p className="thin-text pt-4 text-gray-400">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className='pt-6 px-6 sm:px-0 space-y-5'>
                        <div className='p-4 flex flex-col sm:flex-row text-left'>
                            <div className='bg-orange-600 p-5 rounded-3xl w-fit'>
                            <img src={LocationIcon} width={32} height={32} alt="location-icon" />
                            </div>
                            <div className='flex flex-col justify-center pt-4 sm:pt-0 pl-0 sm:pl-6'>
                                <h4 className='text-xl'>We offer best services</h4>
                                <p className='thin-text text-gray-400 text-sm'>Lorem Ipsum is not simply random text</p>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col sm:flex-row text-left border w-fit rounded-3xl'>
                            <div className='bg-yellow-500 p-5 rounded-3xl w-fit'>
                            <img src={CalendarIcon} width={32} height={32} alt="location-icon" />
                            </div>
                            <div className='flex flex-col justify-center pt-4 sm:pt-0 pl-0 sm:pl-6 '>
                                <h4 className='text-xl'>Schedule your trip</h4>
                                <p className='thin-text text-gray-400 text-sm'>It has roots in a piece of classical</p>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col sm:flex-row text-left'>
                            <div className='bg-pink-500 p-5 rounded-3xl h-[72px] flex items-center w-fit'>
                            <img src={TicketIcon} width={32} height={32} alt="location-icon" />
                            </div>
                            <div className='flex flex-col justify-center pt-4 sm:pt-0 pl-0 sm:pl-6'>
                                <h4 className='text-xl'>Get discounted coupons</h4>
                                <p className='thin-text text-gray-400 text-sm'>Lorem Ipsum is not simply random text</p>
                            </div>
                        </div>
                    </div>
        </div>
        <img className='pl-0 lg:pl-10 order-first lg:order-last' src={FeatureImage} alt="key-features-image" />
    </div>
  )
}

export default KeyFeatures