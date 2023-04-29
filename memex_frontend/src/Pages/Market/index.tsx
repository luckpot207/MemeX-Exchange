import { Button, Col, Input, Row, Select, Table, Tabs } from "antd";
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
import { useEffect, useState } from "react";
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Bitcoin } from '../../assets/icons/bitcoin.svg';
import { ReactComponent as Ethereum } from '../../assets/icons/ethereum.svg';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Chart } from '../../assets/icons/pricechart.svg';
import { ReactComponent as Expand } from '../../assets/icons/expand.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import SearchInputBox from "../../Components/SearchInputBox";
import MarketCard from "../../Components/MarketCard";
import PriceChart from "../../Components/PriceChart";
import SplineChart from "../../Components/SplineChart";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import BTCCard from "../../Components/BTCCard";


import "./index.css";

interface DataType {
    id: number;
    name: React.ReactNode;
    price: string;
    equal: number;
    high: string;
    low: string;
    chart: string;
}

interface TranDataType {
    name: React.ReactNode;
    price: string;
    equal: number;
}

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}

const tranColumns: ColumnsType<TranDataType> = [

    {
        title: 'Coin Name',
        dataIndex: 'name',
        sorter: true,
        width: '',
    },
    {
        title: 'Coin Price',
        dataIndex: 'price',
        sorter: (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)),
        width: '30%',
    },
    {
        title: '24h',
        dataIndex: 'equal',
        sorter: (a, b) => a.equal - b.equal,
        width: '25%',
        render: (data, record, index) =>
            <div className="coin-rise-fall d-flex align-center justify-start">
                <p className="chart-down">+{data}%&nbsp;</p>
                <RiseOutlined className="chart-down__svg" />
            </div>

    }
];

const columns: ColumnsType<DataType> = [
    {
        title: '#',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        width: '7%',
        render: (data, record, index) => <div className="coin-id d-flex align-center justify-between"><a><Star /></a> {data}</div>
    },
    {
        title: 'Coin Name',
        dataIndex: 'name',
        sorter: true,
        width: '25%',
    },
    {
        title: 'Coin Price',
        dataIndex: 'price',
        sorter: (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)),
        width: '15%',
    },
    {
        title: '24h',
        dataIndex: 'equal',
        sorter: (a, b) => a.equal - b.equal,
        width: '10%',
        render: (data, record, index) =>
            <div className="coin-rise-fall d-flex align-center justify-start">
                <p className="chart-down">+{data}%&nbsp;</p>
                <RiseOutlined className="chart-down__svg" />
            </div>

    },
    {
        title: '24h High',
        dataIndex: 'high',
        sorter: (a, b) => parseFloat(a.high.slice(1)) - parseFloat(b.high.slice(1)),
        width: '13%',
    },
    {
        title: '24h Low',
        dataIndex: 'low',
        sorter: (a, b) => parseFloat(a.low.slice(1)) - parseFloat(b.low.slice(1)),
        width: '13%',
    },
    {
        title: 'Chart',
        dataIndex: 'chart',
        sorter: true,
        width: '',
        render: (data, record, index) => <div className="coin-chart d-flex align-center justify-between"><SplineChart /></div>
    },
];

const data: DataType[] = [
    {
        id: 1,
        name: (
            <span className="d-flex justify-start align-center">
                <Bitcoin />
                <div className="coin-name">Bitcoin</div>
                <div className="coin-mark">BTC</div>
            </span>
        ),
        price: '$3,975.72',
        equal: +1.92,
        high: '$445',
        low: '$21',
        chart: 'chart'
    },
    {
        id: 2,
        name: (
            <span className="d-flex justify-start align-center">
                <Ethereum />
                <div className="coin-name">Ethereum</div>
                <div className="coin-mark">ETH</div>
            </span>
        ),
        price: '$43,975.72',
        equal: +0.60,
        high: '$815,388',
        low: '$2',
        chart: 'chart'
    },
    {
        id: 3,
        name: (
            <span className="d-flex justify-start align-center">
                <Ethereum />
                <div className="coin-name">Ethereum</div>
                <div className="coin-mark">ETH</div>
            </span>
        ),
        price: '$43,975.72',
        equal: -0.52,
        high: '$815,388',
        low: '$2',
        chart: 'chart'
    },
];

const tranData: TranDataType[] = [
    {
        name: (
            <span className="d-flex justify-start align-center">
                <Bitcoin />
                <div className="coin-name">Bitcoin</div>
                <div className="coin-mark">BTC</div>
            </span>
        ),
        price: '$3,975.72',
        equal: +1.92,
    },
    {
        name: (
            <span className="d-flex justify-start align-center">
                <Ethereum />
                <div className="coin-name">Ethereum</div>
                <div className="coin-mark">ETH</div>
            </span>
        ),
        price: '$43,975.72',
        equal: +0.60,
    },
    {
        name: (
            <span className="d-flex justify-start align-center">
                <Ethereum />
                <div className="coin-name">Ethereum</div>
                <div className="coin-mark">ETH</div>
            </span>
        ),
        price: '$43,975.72',
        equal: -0.52,
    },
];

const getRandomuserParams = (params: TableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const operations = (
    <div style={{ color: "#9295A6", display: "flex", gap: "20px" }}>

    </div>
);


const Market = () => {

    // const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    // const fetchData = () => {
    //     setLoading(true);
    //     fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
    //         .then((res) => res.json())
    //         .then(({ results }) => {
    //             setData(results);
    //             setLoading(false);
    //             setTableParams({
    //                 ...tableParams,
    //                 pagination: {
    //                     ...tableParams.pagination,
    //                     total: 200,
    //                     // 200 is mock data, you should read it from server
    //                     // total: data.totalCount,
    //                 },
    //             });
    //         });
    // };

    // useEffect(() => {
    //     // fetchData();
    // }, [JSON.stringify(tableParams)]);

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue>,
        sorter: SorterResult<DataType>,
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // // `dataSource` is useless since `pageSize` changed
        // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
        //     setData([]);
        // }
    };

    return (
        <div className="market">
            <div className="container">
                <div className="d-grid">
                    <div className="coin-market">
                        <div>
                            <div className="market-first-container">
                                <div className="d-flex justify-between market-first-container-up">
                                    <div className="d-flex flex-column align-start">
                                        <p className="market-topic">Meme Coins</p>
                                        <p className="market-explain">
                                            Lorem Ipsum is simply dummy text of the printing
                                        </p>
                                    </div>
                                    <SearchInputBox />
                                </div>
                                <div className="d-flex justify-between">
                                    <MarketCard
                                        name="MemeX"
                                        price={38447.54}
                                        chart={true}
                                        chartNumber={2}
                                    />
                                    <div style={{ marginLeft: "20px" }}></div>
                                    <MarketCard
                                        name="MemeX"
                                        price={38447.54}
                                        chart={false}
                                        chartNumber={2}
                                    />
                                    <div style={{ marginLeft: "20px" }}></div>
                                    <MarketCard
                                        name="MemeX"
                                        price={38447.54}
                                        chart={false}
                                        chartNumber={2}
                                    />
                                </div>
                            </div>
                            <div className="market-first-container">
                                <div className="d-flex justify-between market-first-container-up">
                                    <div className="d-flex flex-column align-start">
                                        <p className="market-topic">MemeX / USDT - 24 Hours</p>
                                        <p className="market-explain">
                                            Lorem Ipsum is simply dummy text of the printing.
                                        </p>
                                    </div>
                                    <SearchInputBox />
                                </div>
                                <div className="d-flex flex-row align-center justify-between ">
                                    <div className="d-flex flex-row align-center">
                                        <Button className="btn">Price</Button>
                                        <Button className="btn">Market Cap</Button>
                                        <Button className="btn">Trade View</Button>
                                    </div>
                                    <div className="d-flex flex-row align-center">
                                        <div className="icon d-flex flex-row align-center">
                                            <Calendar />
                                            <select className="time-select">
                                                <option>24h</option>
                                                <option>12h</option>
                                            </select>
                                        </div>
                                        <button className="icon"><Chart /></button>
                                        <button className="icon"><Expand /></button>
                                        <button className="icon"><Menu /></button>
                                    </div>
                                </div>
                                <PriceChart />
                            </div>
                        </div>
                        <Table
                            className="table-row-transparent"
                            rowClassName="table-row-transparent"
                            columns={columns}
                            dataSource={data}
                            pagination={tableParams.pagination}
                            loading={loading}
                        />
                    </div>
                    <div>
                        <div className="buy-sell-card d-flex justify-center">
                            <Tabs
                                className="tabs"
                                tabBarExtraContent={operations}
                                defaultActiveKey="1"
                                style={{ marginTop: "-10px" }}
                                items={[
                                    {
                                        label: "Buy BTC",
                                        key: "1",
                                        children: (
                                            <div className="">
                                                <BTCCard
                                                    walletBalance={100}
                                                    btcBalance={1000}
                                                    quantity={300}
                                                    buyOrSell={200}
                                                    buy={true}
                                                />
                                            </div>
                                        ),
                                    },
                                    {
                                        label: "Sell BTC",
                                        key: "2",
                                        children: (
                                            <div className="">
                                                <BTCCard
                                                    walletBalance={100}
                                                    btcBalance={1000}
                                                    quantity={300}
                                                    buyOrSell={200}
                                                    buy={false}
                                                />
                                            </div>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                        <div className="transactions d-flex flex-column justify-center">
                            <Input placeholder="Recent Transactions"/>
                            <Table
                                columns={tranColumns}
                                dataSource={tranData}
                                scroll={{ x: 'hidden', y: 'auto' }}
                                pagination={false}
                                loading={loading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Market;