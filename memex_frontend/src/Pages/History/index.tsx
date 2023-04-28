import React, { useState } from "react";
import type { TableProps } from "antd";
import { Table, Layout, Tabs, Button, Tag } from "antd";
import WalletTable from "../../Components/WalletTable";
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
  pair: string;
  currency: string;
  action: number;
  ipaddress: string;
  amount: number;
  qty: number;
  dateData: string;
  status: number;
}

const data: DataType[] = [
  {
    key: "1",
    pair: "Bitcoin",
    currency: "BTC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "2",
    pair: "Solana",
    currency: "SOL",
    action: 2,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "3",
    pair: "USD",
    currency: "USDC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "4",
    pair: "Ethereum",
    currency: "ETH",
    action: 0,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "5",
    pair: "XRP",
    currency: "BTC",
    action: 2,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "6",
    pair: "Binance",
    currency: "BNB",
    action: 0,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "7",
    pair: "Bitcoin",
    currency: "BTC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "8",
    pair: "Solana",
    currency: "SOL",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "9",
    pair: "USD",
    currency: "USDC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "10",
    pair: "Bitcoin",
    currency: "BTC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "11",
    pair: "Solana",
    currency: "SOL",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
  {
    key: "12",
    pair: "USD",
    currency: "USDC",
    action: 1,
    ipaddress: "182.179.16.31",
    amount: 10000,
    qty: 0.001242,
    dateData: "Feb 18, 2022 at 04:20PM",
    status: 0,
  },
];

const operations = (
  <div style={{ color: "#9295A6", display: "flex", gap: "20px" }}>
    <div style={{cursor: "pointer"}} className="btn-hover">
      <CalendarOutlined className="btn-hovericon" /> Month{" "}
      <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} className="btn-hovericon" />
    </div>{" "}
    <div style={{cursor: "pointer", marginRight: "-10px" }} className="btn-hover">
      <FilterOutlined className="btn-hovericon"/> Filter{" "}
      <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} className="btn-hovericon"/>
    </div>
    <MoreOutlined style={{ fontSize: "25px" }} />
  </div>
);

const History: React.FC = () => {
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
      title: "Pair",
      dataIndex: "pair",
      key: "pair",
      filteredValue: filteredInfo.pair || null,
      //   onFilter: (value: string, record) => record.name.includes(value),
      sorter: (a, b) => a.pair.length - b.pair.length,
      sortOrder: sortedInfo.columnKey === "pair" ? sortedInfo.order : null,
      ellipsis: true,
      // eslint-disable-next-line jsx-a11y/alt-text
      render: (text) => (
        <div className="flex-items">
          {text === "Bitcoin" ? (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
              width={30}
              height={30}
            />
          ) : text === "Solana" ? (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/2eefc7ffd92b6460ebdcab6fd67e384146ecdec29bff68d78f68b5d9cb9af05652a8d78087b6090c6d598f8fb9af1c3c062c33df15d0db3ba8e465b819841820/asset_icons/fd6899026b1e517bbb7995e5c992c71dc33b85edb3b28b66591579d6706deab2.png"
              width={30}
              height={30}
            />
          ) : text === "USD" ? (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png"
              width={30}
              height={30}
            />
          ) : text === "Ethereum" ? (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
              width={30}
              height={30}
            />
          ) : text === "XRP" ? (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              width={30}
              height={30}
            />
          ) : (
            <img
              alt="BTCRED logo"
              src="https://dynamic-assets.coinbase.com/e155811f316fe86805fd984c690b316a916660f3331d93e4eda952bde355160056872add3c54ea7bde7310e5fcea71eb26a28f50962f601fe4f4b9d8f332f4aa/asset_icons/8ff4f66b560b0bd5e292eab3fdf73229c5fc8944024adbe8920d3fa912494590.png"
              width={30}
              height={30}
            />
          )}{" "}
          {text}{" "}
          <div
            style={{
              color: "#0083F8",
              background: "#080808",
              borderRadius: "5px",
              padding: "1px 12px 1px 12px",
            }}>
            {"BTC"}
          </div>
        </div>
      ),
    },

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
              <MenuFoldOutlined style={{ fontSize: "20px" }} /> Deposite{" "}
            </div>
          ) : (
            <div className="flex-items">
              {" "}
              <MenuUnfoldOutlined style={{ fontSize: "20px" }} /> WithDrawn{" "}
            </div>
          )}{" "}
        </>
      ),
    },
    {
      title: "IP Address",
      dataIndex: "ipaddress",
      key: "ipaddress",
      filteredValue: filteredInfo.ipaddress || null,
      //   onFilter: (value: string, record) => record.address.includes(value),
      sorter: (a, b) => a.ipaddress.length - b.ipaddress.length,
      sortOrder: sortedInfo.columnKey === "ipaddress" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p style={{ color: "#6C7080" }}>{text}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      filteredValue: filteredInfo.amount || null,
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === "amount" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p>$ {text}</p>,
    },
    {
      title: "Qty.Executed",
      dataIndex: "qty",
      key: "qty",
      filteredValue: filteredInfo.qty || null,
      sorter: (a, b) => a.qty - b.qty,
      sortOrder: sortedInfo.columnKey === "qty" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p>{text} BTC</p>,
    },
    {
      title: "Date / Time",
      dataIndex: "dateData",
      key: "dateData",
      filteredValue: filteredInfo.dateData || null,
      sorter: (a, b) => a.dateData.length - b.dateData.length,
      sortOrder: sortedInfo.columnKey === "dateData" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <p style={{ color: "#6C7080" }}>{text}</p>,
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
              color: "#03A66D",
              background: "#080808",
              borderRadius: "5px",
              padding: "1px 12px 1px 12px",
              fontSize: "16px",
              width: "fit-content",
            }}>
            {text === 0 ? "Successful" : "Failed"}
          </div>
        </div>
      ),
      align: "right",
    },
  ];

  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: "#121318",
        }}>
        <div className="head-content ">
          <p className="headline">Trade History</p>
        </div>
        <div className="customize_table">
          <Tabs
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            style={{ marginTop: "-10px" }}
            items={[
              {
                label: "Trade History",
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
                label: "Wallet History",
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
    </>
  );
};

export default History;
