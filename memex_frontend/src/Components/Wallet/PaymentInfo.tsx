import React, { useState } from "react";
import { Layout, Select, Input , Row , Col, DatePicker, Space } from "antd";
import PayPalIcon from "../../assets/icons/paypal.svg";
import VisaIcon from "../../assets/icons/Visa.svg";
import MaestroIcon from "../../assets/icons/Maestro.svg";
import CreditCardIcon from "../../assets/icons/Card.svg";
import { InfoCircleOutlined  } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';

const { Content } = Layout;

const PaymentInfo: React.FC = () => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="paymentInfo flex-col gap-10 w-full">
      <div className="flex flex-col gap-10 items-start">
       <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>Select Currency</span>
        <Select
          defaultValue="lucy"
          style={{ width: "100%", background: "#121318" }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </div>
      <div className="flex flex-col gap-10 items-start">
       <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>Amount</span>
       <Input placeholder="$30,255.22" />
      </div>
      <div className="flex flex-col gap-10 items-start" style={{marginTop: "10px"}}>
       <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>Choose Payment method</span>
       <div className="flex justify-between w-full">
          <div className="flex gap-10">
            <input type="radio" /> <span>PayPal</span>
          </div>
          <img src={PayPalIcon} alt="" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-10">
            <input type="radio" /> <span>Credit & Debit Card</span>
          </div>
          <div className="flex" >
            <img src={VisaIcon} alt="" />
            <img src={MaestroIcon} alt="" />
            <img src={CreditCardIcon} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-10 items-start">
       <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>Number</span>
       <Input  suffix="Visa" defaultValue="1234 5678 9874 4563" />
      </div>
      <Row gutter={16}>
        <Col span={12}>
          <div className="flex flex-col gap-10 items-start">
          <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>Valid</span>
          <DatePicker />
          </div>
        </Col>
        <Col span={12}>
          <div className="flex flex-col gap-10 items-start">
          <span className="" style={{ color: "#6C7080", fontSize: "14px" }}>CVV</span>
          <Input suffix={<InfoCircleOutlined  style={{ color: 'rgba(0,0,0,.45)' }} />}   />
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default PaymentInfo;
