"use client";

import Link from "next/link";
import {usePathname} from "next/navigation"
import style from "./style.module.css";

function getAriaCurrent(flag: boolean){
    return flag ? {"aria-current": "page" as const} :undefined
}

export function Nav() {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <link href="/">トップ</link>
                </li>
                <li>
                    <Link href="categories">カテゴリー一覧</Link>
                </li>
            </ul>
        </nav>
    );
}