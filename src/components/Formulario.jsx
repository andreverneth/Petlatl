import "./Formulario.css"
import { useState } from "react"

export function Formulario({setUser}) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [repetirContraseña, setRepetirContraseña] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre === "" || contraseña === "" || repetirContraseña === "" || email === "") {
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])
    }

    

    return (
        <section>
            
            <h1>Sing up</h1>

            <form 
                className="formulario"
                onSubmit={handleSubmit}
                >
                <img src="/logoPetlatl.jpeg" alt="Logo"></img>

                <input 
                    placeholder="Nombre" 
                    type="text" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                />
                
                <input 
                    placeholder="Correo electrónico" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />

                <input 
                    placeholder="Contraseña" 
                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)} 
                />
                
                <input 
                    placeholder="Repetir Contraseña" 
                    type="password" 
                    value={repetirContraseña}
                    onChange={e => setRepetirContraseña(e.target.value)}
                />
                
                <button>Iniciar sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}