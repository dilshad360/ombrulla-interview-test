import PropTypes from 'prop-types';
import StarIcon from '../assets/svgs/star.svg'

function Card({ data }) {


    return (
        <div className='w-full h-full shadow-2xl rounded-b-2xl'>
            <div className=" h-[320px] overflow-hidden bg-slate-500 rounded-t-2xl">
                <img className="rounded-t-2xl object-cover h-full w-full" src={data.image}></img>
            </div>
            <div className="flex w-full flex-col lg:flex-row justify-between rounded-b-2xl p-6">
                <div className='w-full lg:w-2/3 pt-2 lg:pt-0'>
                    <h6 className='text-xl'>{data.title}</h6>
                    <p className='thin-text pt-4'>{data.place}</p>
                    <p className='text-orange-600 pt-4 text-xl flex gap-2'>{data.rating}
                        <img src={StarIcon} alt="star" />
                    </p>
                </div>
                <h6 className='text-xl text-secondary order-first lg:order-last' >${data.price}</h6>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card