import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

function Photoes() {
    const [id, setId] = useState("");
    const [photo, setPhoto] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const photoData = await res.json();
                console.log(photoData);
                setPhoto(photoData);
            } catch (err) {
                if(err.name != "Abort Error"){
                    setError(true)
                }
                setError(true);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPhotos();
        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [id]);

    const searchHandler = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const photoData = await res.json();
            setPhoto(photoData);
        } catch (err) {
            setError(true);
            console.error("Error fetching data:", err);
        }
    };
    return (
        <div className="px-5">
            <h1>Photos</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter id"
            />
            <button className="btn btn-light" onClick={searchHandler}>
                Search
            </button>
            {loading && <p>Loading...</p>}
            <br/>
            {photo.id && (
                <Badge bg="info" key={photo.id}>
                    {photo.title}
                </Badge>
            )}
            {error && <p>Something went wrong!</p>}
        </div>
    );
}

export default Photoes;
