import { Col, Row } from 'antd';
import { TypeIcon } from 'antd/es/message/PurePanel';
import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Lightning } from '../../assets/lightning.svg';
import { ReactComponent as Wallet } from '../../assets/wallet.svg';
import "./index.css";


const Header = () => {

    return (
        <div className="header">
            <div className="container d-flex justify-between align-center">
                <div className="logo-part d-flex align-center">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="nav-button v-line">
                        <ul className="d-flex">
                            <li><a href="#">Market</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Governance</a></li>
                            <li><a href="#">Learn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="status d-flex flex-row justify-between align-center">
                    <div>
                        <button className="button">English</button>
                        <select className="v-line select">
                            <option>USD</option>
                        </select>
                    </div>
                    <button className="main-button">
                        <Lightning/> <div className="label">Trade History</div>
                    </button>
                    <button className="main-button">
                        <Wallet/> <div className="label">Wallet</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;