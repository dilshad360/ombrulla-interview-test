import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/svgs/menu.svg";

function Header() {
    return (
        <header className="flex px-4 md:px-16 lg:px-40 py-8  justify-between  items-center">
            <img className="block lg:hidden order-last sm:order-first" src={MenuIcon} alt="menu-icon" />
            <img src={Logo} alt="logo" />
            <nav className="flex-1 hidden lg:block ">
                <ul className="flex justify-center gap-14 text-sm text-gray-500">
                    <a href="#">
                    <li className="text-black">Home</li>
                    </a>
                    <a href="#">
                    <li>Discover</li>
                    </a>
                    <a href="#">
                    <li>Special Deals</li>
                    </a>
                    <a href="#">
                    <li>Contact</li>
                    </a>
                </ul>
            </nav>
            <div className="space-x-1 hidden sm:block">
                <button className="px-6 py-3 rounded-3xl hover:bg-secondary hover:opacity-80 transition-all ease-in-out">
                    Log In
                </button>
                <button className="bg-primary text-white px-6 py-3 rounded-3xl hover:opacity-70 transition-opacity ease-in-out">
                    Sign Up
                </button>
            </div>
        </header>
    );
}

export default Header;
