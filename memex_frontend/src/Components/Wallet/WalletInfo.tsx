import React, { useState } from "react";
import { commafy } from "../../Common/utils";
import { Layout, Button } from "antd";
import { EditOutlined, PlusOutlined, WalletOutlined, DownloadOutlined, UploadOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import DepositIcon from '../../assets/icons/deposite.svg';
import ClockIcon from '../../assets/icons/clock.svg';

const { Content } = Layout;

const WalletInfo: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <div className="walletinfo flex-col gap-50">
      <div className="flex justify-between">
        <div className="flex-col gap-10 items-start ">
          <span style={{ color: "#FFFFFF", fontWeight: "500", fontSize: "23px" }}>Wallet</span>
          <span style={{ color: "#9295A6", fontWeight: "400", fontSize: "14px" }}>Update 16/02/2022 at 02:30 PM</span>
        </div>
        <div className="flex gap-10 ">
          <Button ghost icon={<EditOutlined />} size={size}>Edit</Button>
          <Button ghost icon={<PlusOutlined />} size={size}> Add New Wallet </Button>
        </div>
      </div>
      <div className="flex  justify-between w-full">
        <div className="flex-col justify-inherit">
          <div style={{color: "#6C7080"}} className="flex gap-10"> <WalletOutlined style={{fontSize: "18px"}}/> <span style={{  fontWeight: "400", fontSize: "14px" }}>Wallet Balance</span> </div>  
          <div className="flex gap-40 items-center">
             <span style={{ color: "#FFFFFF", fontWeight: "500", fontSize: "33px" }}>${commafy(32455.12)}</span>
             <div
              style={{
                color: "#6C7080",
                background: "#080808",
                borderRadius: "5px",
                padding: "1px 12px 1px 12px",
                height: "30px"
              }} className="flex gap-10 items-center">
              <span>Hide Price</span>
              <EyeInvisibleOutlined />               
            </div>
          </div>
        </div>
        <Content 
        style={{
          padding: 15,
          background: "#080808",
          borderRadius: "5px",
          width: "40%"
        }}>
          <div className="flex-col gap-23 ">
            <div className="flex justify-between">
              <div className="flex-items gap-10" style={{color: "#6C7080"}}>
                <img src={DepositIcon} alt="" width="24px" height="24px" /><span>Total Deposited</span> 
              </div>
              <div className="flex-items gap-10" >
                <DownloadOutlined style={{color: "#5367FF"}}/> <span style={{color: "#ffffff"}}>${commafy(32455.12)}</span> 
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex-items gap-10" style={{color: "#6C7080"}}>
                <img src={ClockIcon} alt="" width="24px" height="24px" /><span>Total Withdrawals</span> 
              </div>
              <div className="flex-items gap-10">
              <UploadOutlined style={{color: "#5367FF"}}/><span style={{color: "#ffffff"}}>${commafy(2000.12)}</span> 
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default WalletInfo;
