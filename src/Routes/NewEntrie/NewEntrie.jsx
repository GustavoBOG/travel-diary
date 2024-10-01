import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function NewEntrie() {
    const [user] = useUser();
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [success, setSuccess] = useState(null);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        
        // console.log("Subiendo:", file);

        const fd = new FormData();
        fd.append('title', title)
        fd.append('place', place)
        fd.append('description', description)
        fd.append("image", file);

        const res = await fetch("https://travel-diary-api.anxoso.com/entries", {
            method: "POST",
            headers: { Authorization: user.token },
            body: fd,
        });
        const json = await res.json();
        setSuccess(json);
        navigate("entries" + json.date);
    };

    if (!user) return <Navigate to="/" />;

    return (
        <div id="upload" className="page">
            <h1>Subir imagen</h1>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    placeholder="Título" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Lugar" 
                    value={place} 
                    onChange={(e) => setPlace(e.target.value)} 
                />
                <textarea 
                    placeholder="Descripción" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <label>
                    
                    {preview ? (
                        <img className="image-preview" src={preview} />
                    ) : (
                        <div className="add-image" />
                    )}
                    <input type="file" onChange={handleFile} />
                </label>
                <button>Subir</button>
            </form>
            {success && (
                <div>
                    Imagen subida con éxito!
                    <br />
                    <a href={success.url} target="_blank">
                        {success.url}
                    </a>
                </div>
            )}
        </div>
    );
}

export default NewEntrie;