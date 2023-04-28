import React, { useState } from "react";
import { commafy } from "../../Common/utils";
import type { TableProps } from "antd";
import { Table, Layout, Tabs, Col, Row } from "antd";
import WalletTable from "../../Components/Table/WalletTable";
import WalletInfo from "../../Components/Wallet/WalletInfo";
import PaymentInfo from "../../Components/Wallet/PaymentInfo";
import SearchInputBox from "../../Components/SearchInputBox";
import DepositIcon from "../../assets/icons/deposite.svg";
import WithDrawIcon from "../../assets/icons/withdraw.svg";

import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  DownOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Content } = Layout;

interface DataType {
  key: string;
  action: number;
  amount: number;
  dateData: string;
  status: number;
}

const data: DataType[] = [
  {
    key: "1",
    action: 1,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "2",
    action: 2,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "3",
    action: 1,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "4",
    action: 1,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "5",
    action: 2,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "6",
    action: 1,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
  {
    key: "7",
    action: 2,
    amount: 10000,
    dateData: "Feb 18, 2022",
    status: 0,
  },
];

const operations = (
  <div style={{ color: "#9295A6", display: "flex", gap: "20px" }}>
    <div style={{ cursor: "pointer" }} className="btn-hover">
      <CalendarOutlined className="btn-hovericon" /> Month{" "}
      <DownOutlined
        style={{ fontSize: "10px", marginLeft: "5px" }}
        className="btn-hovericon"
      />
    </div>{" "}
    <MoreOutlined style={{ fontSize: "25px" }} />
  </div>
);

const Wallet: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      sorter: (a, b) => a.action - b.action,
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => (
        <>
          {" "}
          {text === 1 ? (
            <div className="flex-items">
              <img src={DepositIcon} alt="" /> Deposited
            </div>
          ) : (
            <div className="flex-items">
              <img src={WithDrawIcon} alt="" /> Withdrawn
            </div>
          )}{" "}
        </>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      filteredValue: filteredInfo.amount || null,
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === "amount" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p>$ {commafy(text)}</p>,
    },
    {
      title: "Date / Time",
      dataIndex: "dateData",
      key: "dateData",
      filteredValue: filteredInfo.dateData || null,
      sorter: (a, b) => a.dateData.length - b.dateData.length,
      sortOrder: sortedInfo.columnKey === "dateData" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filteredValue: filteredInfo.status || null,
      sorter: (a, b) => a.status - b.status,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => (
        <div className="flex-end">
          <div
            style={{
              color: text === 0 ? "#03A66D" : "#DC2626",
              background: "#080808",
              borderRadius: "5px",
              padding: "1px 12px 1px 12px",
              fontSize: "16px",
              width: "fit-content",
            }}>
            {text === 0 ? "Successful" : "Rejected"}
          </div>
        </div>
      ),
      align: "right",
    },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={17}>
          <Content
            style={{
              padding: 24,
              background: "#121318",
              borderRadius: "10px",
            }}>
            <WalletInfo />
          </Content>
          <Content
            style={{
              marginTop: "24px",
              padding: 24,
              minHeight: 280,
              background: "#121318",
              borderRadius: "10px",
            }}>
            <div className="head-content flex justify-between">
              <p className="headline">Transaction History</p>
              <SearchInputBox place="Search by date" />
            </div>
            <div className="customize_table">
              <Tabs
                tabBarExtraContent={operations}
                defaultActiveKey="1"
                style={{ marginTop: "-10px" }}
                items={[
                  {
                    label: "Wallet History",
                    key: "1",
                    children: (
                      <div className="">
                        <Table
                          columns={columns}
                          dataSource={data}
                          onChange={handleChange}
                        />
                        <div className="count-asset">{data.length} assets </div>
                      </div>
                    ),
                  },
                  {
                    label: "Coin Wallet",
                    key: "2",
                    children: (
                      <div className="">
                        <WalletTable />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </Content>
        </Col>
        <Col span={7}>
          <Content
            style={{
              padding: 24,
              background: "#121318",
              borderRadius: "10px",
            }}>
            <PaymentInfo />
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default Wallet;
