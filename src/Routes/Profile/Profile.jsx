import React from "react";
import { useUser } from "../../UserContext";
import { Navigate } from "react-router-dom";
import { useUserInfo } from "../../hooks/api";

function Profile() {
    const [user] = useUser();
    const profiles = useUserInfo();

    // console.log("ID:", profiles?.userId);

    if (!user) return <Navigate to="/" />;

    if (!profiles || !profiles.data) {
        // console.log(profiles);

        return <p>Cargando perfiles...</p>;
    }

    return (
        <div className="my-profile">
            <h1>Mi Perfil</h1>
            <ul>
                    <li key={profiles.data.user.id}>
                        <p>Nombre Usuario:{profiles.data.user.firstName}</p>
                        <p>Id usuario:{profiles.data.user.id}</p>
                        <p>Email usuario: {profiles.data.user.email} </p>
                        <br />
                        <button className="btn-click">Editar perfil</button>
                    </li>
            </ul>
        </div>
    );
}

export default Profile;


// function UserProfile() {
//     const [user] = useUser(); // Obtén el usuario del contexto
  
//     // Verifica los datos del usuario en la consola
//     console.log('Datos del usuario:', user);
  
//     return (
//       <div>
//         {/* Mostrar los datos del usuario aquí */}
//       </div>
//     );
//   }