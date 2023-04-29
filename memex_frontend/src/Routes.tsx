import { Routes, Route, Navigate } from "react-router-dom";
import Market from "./Pages/Market";
import History from "./Pages/History";
import Wallet from "./Pages/Wallet";

const RoutesComp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Market/>}/>
                <Route path="/Dashboard" element={<Market/>}/>
                <Route path="/History" element={<History/>}/>
                <Route path="/Wallet" element={<Wallet/>}/>
                
            </Routes>
        </>
    );
}

export default RoutesComp;