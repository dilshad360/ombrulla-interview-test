import { useState } from "react";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/svgs/menu.svg";

function Header() {

    const [MobNav, setMobNav] = useState(false);

  const toggleMobNav = () => {
    setMobNav(!MobNav);
  };

    return (
        <>
        <header className="flex px-4 md:px-16 lg:px-40 py-8  justify-between items-center">
            <img className="block lg:hidden order-last sm:order-first hover:opacity-50" onClick={toggleMobNav} src={MenuIcon} alt="menu-icon" />
            <a href="/">
            <img src={Logo} alt="logo" />
            </a>
            <nav className="flex-1 hidden lg:block ">
                <ul className="flex justify-center gap-14 text-sm text-gray-500">
                    <a href="/">
                    <li className="text-black">Home</li>
                    </a>
                    <a href="/discover">
                    <li>Discover</li>
                    </a>
                    <a href="/deals">
                    <li>Special Deals</li>
                    </a>
                    <a href="/contact">
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
        <div className={`${!MobNav && "hidden"} animated fadeIn`}><ul className="flex flex-col justify-center text-3xl items-center gap-14 text-gray-400 py-10 bg-slate-100  lg:hidden">
                    <a href="/">
                    <li className="text-black">Home</li>
                    </a>
                    <a href="/discover">
                    <li>Discover</li>
                    </a>
                    <a href="/deals">
                    <li>Special Deals</li>
                    </a>
                    <a href="/contact">
                    <li>Contact</li>
                    </a>
                    <div className="space-x-1 block sm:hidden">
                <button className="px-6 py-3 rounded-3xl hover:bg-secondary hover:opacity-80 transition-all ease-in-out">
                    Log In
                </button>
                <button className="bg-primary text-white px-6 py-3 rounded-3xl hover:opacity-70 transition-opacity ease-in-out">
                    Sign Up
                </button>
            </div>
                </ul>
                
                </div>
        </>
    );
}

export default Header;
