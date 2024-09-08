import Link from "next/link";
import style from "./style.module.css";

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