import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
export const ring = createContext('golden ring');

const Grandpa = () => {
    return (
        <div className="grandpa">
            <h2 className="grandpa">Grandpa</h2>
            <section>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;