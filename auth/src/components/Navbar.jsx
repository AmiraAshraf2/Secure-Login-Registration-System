import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const navigate = useNavigate();

    const [username, setUsername] = useState(
        localStorage.getItem("username")
    );

    const logout = () => {
        localStorage.removeItem("username");
        setUsername(null);
        navigate("/login");
    };

    return (
        <nav className={styles.nav}>
            <NavLink className={styles.NavLink} to="/">
                Home
            </NavLink>

            {!username && (
                <div>
                    <NavLink
                        className={`${styles.NavLink} ${styles.login}`}
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className={styles.NavLink}
                        to="/registr"
                    >
                        Register
                    </NavLink>
                </div>
            )}

            {username && (
                <div>
                    <button
                        className={styles.logout}
                        onClick={logout}
                    >
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>
            )}
        </nav>
    );
}