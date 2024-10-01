import React, { useState } from "react";
import { useUserInfo } from "../../hooks/api";

function EditUser() {
    const [user] = useUser();
    const userInfo = useUserInfo();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("avatar", avatar);
        fd.append("firstName", firstName);
        fd.append("lastName", lastName);
        //fd.append('email', email)
        //fd.append('password', password)

        const res = await fetch(
            `https://travel-diary-api.anxoso.com/users/edit/`,
            {
                method: "POST",
                headers: { Authorization: user.token },
                body: fd,
            }
        );
        const json = await res.json();
        setSuccess(json);
        navigate("/users" + json.date);
    };

    return (
        <div>
            <h2>Editar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={userInfo?.firstName || "Nombre actual"}
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={userInfo?.lastName || "Apellido actual"}
                    />
                </label>
                <label>
                    Avatar:
                    <input
                        type="file"
                        onChange={(e) => setAvatar(e.target.files[0])}
                    />
                </label>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}

export default EditUser;