import Logo from "../../assets/logo.svg";
import FacebookIcon from "../../assets/svgs/socials/facebook.svg";
import TwitterIcon from "../../assets/svgs/socials/twitter.svg";
import InstagramIcon from "../../assets/svgs/socials/instagram.svg";

function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row px-4 md:px-16 lg:px-40 py-8 pb-24">
            <div className="w-full lg:w-1/2">
                <img src={Logo} alt="logo" />
                <p className="text-gray-400 text-xl pt-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC.
                </p>
                <div className="flex gap-2 pt-8">
                    <a href="">
                        <img src={FacebookIcon} alt="facebook-icon" />
                    </a>
                    <a href="">
                        <img src={TwitterIcon} alt="twitter-icon" />
                    </a>
                    <a href="">
                        <img src={InstagramIcon} alt="instagram-icon" />
                    </a>
                </div>
            </div>
            <div className="flex gap-12 pt-8 lg:pt-0 lg:pl-6 w-full lg:w-1/2 justify-between flex-col sm:flex-row">
                <div>
                    <h6 className="text-2xl ">Company</h6>
                    <div className="flex  thin-text flex-col text-gray-500 text-lg gap-6 pt-6 ">
                        <a href="">About</a>
                        <a href="">Career</a>
                        <a href="">Mobile</a>
                    </div>
                </div>
                <div>
                    <h6 className="text-2xl ">Contact</h6>
                    <div className="flex thin-text flex-col text-gray-500 text-lg gap-6 pt-6 ">
                        <a href="">Why Travlog?</a>
                        <a href="">Partner with us</a>
                        <a href="">FAQ&#39;s</a>
                        <a href="">Blog</a>
                    </div>
                </div>
                <div>
                    <h6 className="text-2xl ">Meet Us</h6>
                    <div className="flex thin-text flex-col text-gray-500 text-lg gap-6 pt-6 ">
                        <a href="">+00 92 1234 56789</a>
                        <a href="">info@travlog.com</a>
                        <a href="">
                            205. R Street, New York <br />
                            BD23200
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
