import "./Home.css"

export function Home({ user, setUser }) {

    const handleLogout = () => {
        setUser([])
    }

    return (

        <div className="home-container">
            <img src="/logoPetlatl.jpeg" classNAme="home-logo" alt="Logo"></img>
            
            <div class="input-wrapper">
                <input type="search" class="input" placeholder="Search" />
 
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                class="input-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
                />
                </svg>
                </div>
                
            <h2 className="home-title">
                Bienvenido a <h2 className="home-logo"> Petlatl Studio</h2> la casa de los tapetes artesanales
                </h2> 
                <span >{user},</span>
            <button className="logout-button" onClick={handleLogout}>
                Cerrar sesión</button>
        </div>
    )
}
