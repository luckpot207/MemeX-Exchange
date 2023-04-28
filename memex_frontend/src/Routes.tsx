import { Routes, Route, Navigate } from "react-router-dom";
import Market from "./Pages/Market";

const RoutesComp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Market/>}/>
                
            </Routes>
        </>
    );
}

export default RoutesComp;