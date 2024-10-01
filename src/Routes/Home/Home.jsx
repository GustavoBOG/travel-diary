import { useHome } from "../../hooks/api";
import { useUser } from "../../UserContext";
import Portada from "../Portada/Portada";

import "./Home.css";

function Home() {
    const home = useHome();
    const [user] = useUser();

    return (
        <>
            {user ? (
                <div className="portada">
                    <ul>
                        {home?.data.map((data) => (
                            <li key={data.id}>
                                <p>Título:{data.title}</p>
                                {data.photos && data.photos.length > 0 ? (
                                    <img
                                        src={`https://travel-diary-api.anxoso.com/uploads/${data.photos[0].name}`}
                                        alt="Imagen"
                                    />
                                ) : null}
                                <p>🌴 Lugar:{data.place}</p>
                                <p>👤 Id usuario:{data.userId}</p>
                                <p className="votes">❤️ {Math.floor(data.votes)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <Portada/>
            )}
        </>
    );
}

export default Home;


// import { useHome } from "../../hooks/api";
// import "./Home.css";

// function Home() {
//   const home = useHome();

//   return (
//       <ul>
//         {home?.data.map((data) => (
//           <li key={data.id}>
//             <p>Título:{data.title}</p>
//             {data.photos.length > 0 ? (
//               <img
//                 src={`https://travel-diary-api.anxoso.com/uploads/${data.photos[0].name}`}
//                 alt="Imagen"
//               />
//             ) : (
//               <p>No image available</p>
//             )}
//             <p>🌴 Lugar:{data.place}</p>
//             <p>👤 Id usuario:{data.userId}</p>
//             <p>❤️ Votos:{data.votes}</p>
//           </li>
//         ))}
//       </ul>
//   );
// }

// export default Home;
