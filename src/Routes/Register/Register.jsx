import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import "./Register.css";

function Register() {
    const [user, setUser] = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[firstName, setFirstName]= useState('');
    const [{lastName, setLastName}] = useState('');
    const [error, setError] = useState(null);

    if(user) return <Navigate to="/"/>

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const res = await fetch("https://travel-diary-api.anxoso.com/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, firstName, lastName, password }),
        });
        const json = await res.json();
        if (res.ok) {
            setUser(json);
        } else {
            setError(json.error);
        }
    };

    if (user) {
        // Si ya estás logeado, muestra un mensaje
        return (
            <div id="login" className="page">
                <h1>Ya has iniciado sesión!</h1>
                <Link to="/">Continuar...</Link>
            </div>
        );
    }

    return (
        <div id="register" className="page">
            <h1>Registrate</h1>
            <form className="register" onSubmit={handleSubmit}>
                <div className="inline">
                <label>
                    <input
                        placeholder="Nombre..."
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        placeholder="Apellido..."
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                </div>
                <label>
                    <input
                        placeholder="Correo electrónico..."
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        placeholder="Contraseña..."
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button id="btnreg" className="btnregister">Enviar</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Register;


// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { useUser } from "../../UserContext";

// function Register() {
//     const [user, setUser] = useUser();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);

//     if(user) return <Navigate to="/"/>

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);
//         const res = await fetch("https://travel-diary-api.anxoso.com/users/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password }),
//         });
//         const json = await res.json();
//         if (res.ok) {
//             setUser(json);
//         } else {
//             setError(json.error);
//         }
//     };

//     if (user) {
//         // Si ya estás logeado, mostrar un mensaje
//         return (
//             <div id="login" className="page">
//                 <h1>Ya has iniciado sesión!</h1>
//                 <Link to="/">Continuar...</Link>
//             </div>
//         );
//     }

//     return (
//         <div id="login" className="page">
//             <h1>Registrate</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <span>Email: </span>
//                     <input
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     <span>Contraseña:</span>
//                     <input
//                         name="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <button>Entrar</button>
//                 {error && <p>{error}</p>}
//             </form>
//         </div>
//     );
// }

// export default Register;
