import Partner1 from "../assets/svgs/partners/partner-1.svg";
import Partner2 from "../assets/svgs/partners/partner-2.svg";
import Partner3 from "../assets/svgs/partners/partner-3.svg";
import Partner4 from "../assets/svgs/partners/partner-4.svg";
import Partner5 from "../assets/svgs/partners/partner-5.svg";


function Partners() {

  const partners = [ Partner1, Partner2, Partner3, Partner4, Partner5]

  return (
    <div className="grid place-items-center grid-cols-3 gap-3 items-center justify-center lg:grid-cols-5 space-x-4 px-4 md:px-16 lg:px-40   py-16">
    {partners.map((partner, index) => (
      <img
        src={partner}
        alt="partner"
        key={index}
        className="w-32"
      />
    ))}
    </div>
  )
}

export default Partners