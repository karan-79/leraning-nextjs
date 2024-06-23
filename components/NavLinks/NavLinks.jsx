'use client';

import Link from "next/link";
import classes from "./nav-link.module.css";
import {usePathname} from "next/navigation";

const NavLinks = () => {
    const path = usePathname()
    return <ul>
        <li>
            <Link href="/meals"
                  className={path.startsWith("/meals") ? classes.active : undefined}>Meals</Link>
        </li>
        <li>
            <Link href="/community"
                  className={path === '/community' ? classes.active : undefined}>Community</Link>
        </li>
    </ul>
}

export default NavLinks