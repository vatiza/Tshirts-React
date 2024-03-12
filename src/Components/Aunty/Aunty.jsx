import { useContext } from "react";
import { ring } from "../Grandapa/Grandpa";


const Aunty = () => {
    const goldring = useContext(ring);
    return (
        <div>
            <h1>Aunty</h1>
            <p>{goldring}</p>
        </div>
    );
};

export default Aunty;