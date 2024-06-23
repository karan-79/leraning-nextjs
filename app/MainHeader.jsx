import Logo from '../assets/logo.png'
import Link from "next/link";
import classes from '../components/main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "../components/MainHeaderBackground";
import NavLinks from "../components/NavLinks/NavLinks";

const MainHeader = () => {
    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={Logo} alt="Logo image" priority/>
            </Link>
            <nav className={classes.nav}>
                <NavLinks/>
            </nav>
        </header>
    </>
}

export default MainHeader