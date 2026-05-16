
export default function Home() {
    const username = localStorage.getItem("username");
    return (
        <div>
            <h1>Hello {username}</h1>
        </div>
    )
}
