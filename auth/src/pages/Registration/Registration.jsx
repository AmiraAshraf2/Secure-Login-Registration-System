import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/auth/register",
                form
            );

            alert("Registered successfully");

            navigate("/login");

        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <>

            <div className="auth-card">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}
