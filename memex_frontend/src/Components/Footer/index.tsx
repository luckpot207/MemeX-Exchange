import "./index.css";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Paypal } from '../../assets/paypal.svg';
import { ReactComponent as MarsterCard } from '../../assets/mastercard.svg';
import { ReactComponent as CreditCard } from '../../assets/creditcard.svg';
import { ReactComponent as Bitcoin } from '../../assets/bitcoin.svg';
import { Button, Input } from "antd";

const Footer = () => {

    return (
        <div className="footer">
            <div className="container d-flex flex-column">

                <Logo />
                <div className="col d-flex flex-row justify-between">
                    <div className="row first-row">
                        <div className="title">
                            Exchange
                        </div>
                        <div className="content">
                            <ul className="d-flex flex-column">
                                <li><a href="#">Exchange Home</a></li>
                                <li><a href="#">Margin Tranding</a></li>
                                <li><a href="#">Derivatieves Trading</a></li>
                                <li><a href="#">Supercharger</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title">
                            Company
                        </div>
                        <div className="content">
                            <ul className="d-flex flex-column">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Announcements</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title">
                            Resources
                        </div>
                        <div className="content">
                            <ul className="d-flex flex-column">
                                <li><a href="#">Downloads</a></li>
                                <li><a href="#">Buy Crypto</a></li>
                                <li><a href="#">Derivatieves Trading</a></li>
                                <li><a href="#">Supercharger</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row newsletter">
                        <div className="title">
                            Newsletter
                        </div>
                        <div className="content">
                            <div className="email d-flex">
                                <Input placeholder="Enter your email" />
                                <Button type="primary">Send</Button>
                            </div>
                            <div className="label row">We accept following payment systems</div>
                            <div className="label row d-flex flex-row justify-between">
                                <button className="main-button">
                                    <Paypal />
                                </button>
                                <button className="main-button">
                                    <MarsterCard />
                                </button>
                                <button className="main-button">
                                    <Bitcoin />
                                </button>
                                <button className="main-button">
                                    <CreditCard />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright col">
                    <div className="h-line">
                        <div className="content d-flex flex-row">
                            <div>
                                © 2022 dynamic. All rights reserved
                            </div>
                            <div className="v-line">
                                <div className="row">
                                    Parivacy
                                </div>
                            </div>
                            <div className="v-line">
                                <div className="row">
                                    Terms
                                </div>
                            </div>
                            <div className="v-line">
                                <div className="row">
                                    Sitemap
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;