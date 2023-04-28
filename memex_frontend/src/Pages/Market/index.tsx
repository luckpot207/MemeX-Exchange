import { Col, Row, Select, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
import { useEffect, useState } from "react";
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Bitcoin } from '../../assets/icons/bitcoin.svg';
import { ReactComponent as Ethereum } from '../../assets/icons/ethereum.svg';
import SearchInputBox from "../../Components/SearchInputBox";
import MarketCard from "../../Components/MarketCard";
import PriceChart from "../../Components/PriceChart";
import SplineChart from "../../Components/SplineChart";

import "./index.css";

interface DataType {
    id: number;
    name: React.ReactNode;
    price: string;
    equal: string;
    high: string;
    low: string;
    chart: string;
}

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}

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
        sorter: true,
        width: '10%',
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
        render: (data, record, index) => <div className="coin-chart d-flex align-center justify-between"><SplineChart/></div>
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
        equal: '+1.92%',
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
        equal: '+0.60%',
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
        equal: '+0.60%',
        high: '$815,388',
        low: '$2',
        chart: 'chart'
    },
];

const getRandomuserParams = (params: TableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});


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
                <Row>
                    <Col className="coin-market" span={18}>
                        <Row>
                            <div className="market__first-container">
                                <div className="d-flex justify-between market__first-container__up">
                                    <div>
                                        <p className="market__topic">Meme Coins</p>
                                        <p className="market__explain">
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
                            <div className="market__first-container">
                                <div className="d-flex justify-between market__first-container__up">
                                    <div>
                                        <p className="market__topic">MemeX / USDT - 24 Hours</p>
                                        <p className="market__explain">
                                            Lorem Ipsum is simply dummy text of the printing.
                                        </p>
                                    </div>
                                    <SearchInputBox />
                                </div>
                                <PriceChart />
                            </div>
                        </Row>
                        <Table
                            className="table-row-transparent"
                            rowClassName="table-row-transparent"
                            columns={columns}
                            dataSource={data}
                            pagination={tableParams.pagination}
                            loading={loading}
                            onChange={() => handleTableChange}
                        />
                    </Col>
                    <Col span={6}>
                        col-6 col-pull-18
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Market;