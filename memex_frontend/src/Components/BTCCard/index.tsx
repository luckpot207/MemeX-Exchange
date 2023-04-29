import Bitcoin from '../../assets/icons/bitcoin.svg';
import Wallet from '../../assets/icons/wallet.svg';
import USD from '../../assets/icons/usd.svg';
import "./index.css";
import { Button } from 'antd';

const BTCCard = (props: BTCCardProps) => {
  return (
    <div className="btccard-container d-flex flex-column">
      <div className="column d-flex flex-row align-center justify-between">
        <div className='wallet d-flex flex-row align-center'>
          <img src={Wallet} />
          <div className='wallet-value'>
            ${props.walletBalance}
          </div>
        </div>
        <div className='wallet d-flex flex-row align-center'>
          <img src={Bitcoin} />
          <div className='wallet-value'>
            ${props.btcBalance}
          </div>
        </div>
      </div>

      <div className="column box d-flex flex-row align-center justify-between">
        <div className="d-flex flex-column align-start">
          <div >
            Quantity (BTC)
          </div>
          <div>
            |<span className='color-white'>
              ${props.quantity}
            </span>
          </div>
        </div>
        <div className="icon d-flex flex-row align-center">
          <img src={Bitcoin} />
          <select className="coin-select">
            <option>BTC</option>
          </select>
        </div>
      </div>

      <div className="column box d-flex flex-row align-center justify-between">
        <div className="d-flex flex-column align-start">
          <div >
            {props.buy ? "Buy" : "Sell"} For (USD)
          </div>
          <div>
            |<span className='color-white'>
              ${props.buyOrSell}
            </span>
          </div>
        </div>
        <div className="icon d-flex flex-row align-center">
          <img src={USD} />
          <select className="coin-select">
            <option>USD</option>
          </select>
        </div>
      </div>
      <div className='total d-flex flex-start'>
        Total: (+Fee 0.2) 0.00
      </div>
      <Button>
        {props.buy ? "Buy" : "Sell"} BTC
      </Button>

    </div>
  );
};

declare interface BTCCardProps {
  walletBalance: number;
  btcBalance: number;
  quantity: number;
  buyOrSell: number;
  buy: boolean;
}

export default BTCCard;
