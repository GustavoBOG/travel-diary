import { Link } from "react-router-dom";
import "./Header.css";
import { useUserInfo } from "../../hooks/api";
import { useUser } from "../../UserContext";

import HeaderSesion from "./HeaderSesion";


function Header() {
    const userInfo = useUserInfo();
    const [user] = useUser();

    return (
        <header id="head">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            {user ? (
                <>
                    <HeaderSesion />
                </>
            ) : (
                <Link to="login">Inicia sesión</Link>
            )}
        </header>
    );
}

export default Header;



// import { Link } from "react-router-dom";
// import "./Header.css";
// import { useUserInfo } from "../../hooks/api";
// import { useUser } from "../../UserContext";
// import LogoutButton from "../Logout/LogoutButton";

// function Header() {
//   const userInfo = useUserInfo();
//   const [user] = useUser();
  
//   console.log('Datos del usuario en Header:', userInfo);
//   console.log('Estado del usuario en Header:', user);

//   return (
//     <header id="head">
//       <Link to="/">
//           <img src="../../src/assets/logo-tda.png" alt="inicio " />
//       </Link>
//       <>
//         {user ? (
//           <>
//             <Link to="/users">Mi perfil</Link>
//             <Link to="entries/new">Nueva entrada</Link>
//             <LogoutButton />
//             <h1>Nombre</h1>
//           </>
//         ) : (
//           <>
//             <Link to="login">Inicia sesión</Link>
//             <Link to="register">Regístrate</Link>
//           </>
//         )}
//       </>
//     </header>
//   );
// }

// export default Header;
