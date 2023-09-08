import "./Home.css"

export function Home({ user, setUser }) {

    const handleLogout = () => {
        setUser([])
    }

    return (

        <div className="home-container">
            <img src="/logoPetlatl.jpeg" classNAme="home-logo" alt="Logo"></img>

            <h2 className="home-title">
                Bienvenido a <h2 className="home-logo"> Petlatl Studio</h2> la casa de los tapetes artesanales
                </h2> 
                <span >{user},</span>
            <button className="logout-button" onClick={handleLogout}>
                Cerrar sesión</button>
        </div>
    )
}