import { Routes, Route, Navigate } from "react-router-dom";
import Market from "./Pages/Market";
import History from "./Pages/History";

const RoutesComp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Market/>}/>
                <Route path="/history" element={<History/>}/>
                
            </Routes>
        </>
    );
}

export default RoutesComp;