import { useContext } from "react";
import { ring } from "../Grandapa/Grandpa";


const Myself = () => {
    const ring1 = useContext(ring);
    return (
        <div>
            <h1>My self</h1>
            <p>{ring1}</p>

        </div>
    );
};

export default Myself;