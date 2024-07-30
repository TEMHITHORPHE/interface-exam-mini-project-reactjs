
import { useCallback, useEffect, useState } from 'react'
import { toast } from "react-toastify";
import useSWR from 'swr';

import "./transactionhistory.css";

function TransactionHistory({ isOpen, OnModalClose, }) {

    const [transactions, updateTransactions] = useState([]);

    const userId = localStorage.getItem('userId');
    const userAPIToken = localStorage.getItem('userAPIToken');

    const formatNetworkAddress = useCallback((address) => {
        return address.substr(0, 6) + "...." + address.substr(-5);
    });

    const formatDatetime = useCallback((timestamp) => {
        const datetime = new Date(timestamp);
        return datetime.toDateString() + "," + datetime.toLocaleString().split(',')[1];
    });

    useEffect(() => {
        // console.log("Running Effect!!");
        // fetch('http://localhost:3001/api/withdraw/history/' + userId, {
        fetch('https://exam-nodejs-main.onrender.com/api/withdraw/history/' + userId, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'user-api-token': userAPIToken
            }
        }).then(res => {
            console.log(res.status);
            if (res.status != 200) {
                toast.error(res.error)
                return;
            }
            return res.json()
        }).then(res => {
            console.log(res.transactions);
            updateTransactions(_ => [...res.transactions]);
            return res.transactions;
        });
    }, [])


    return (
        <div id="tnxn-history">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>TIME</th>
                        <th>NETWORK</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction, index) =>
                            <tr key={transaction.datetime} status={transaction.status.toLowerCase()}>
                                <td>{index + 1}</td>
                                <td>
                                    {formatDatetime(transaction.datetime)}
                                </td>
                                <td>{transaction.network}</td>
                                <td>{formatNetworkAddress(transaction.address)}</td>
                                <td>{transaction.status}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        )
                    }
                    {/* <tr status="pending">
                        <td>1</td>
                        <td>
                            {new Date('2024-07-26T11:57:08.720Z').toLocaleString()}
                        </td>
                        <td>Bitcoin</td>
                        <td>0x1ABFDECBC3E601ACCEE2DEA</td>
                        <td>PENDING</td>
                        <td>50</td>
                    </tr> */}
                    {/*
                     <tr status="completed">
                        <td>2</td>
                        <td>{new Date('2024-07-26T12:05:10.000Z').toDateString()}</td>
                        <td>Ethereum</td>
                        <td>0x3AG47BC3E601ACCEE2DEA</td>
                        <td status="completsed">COMPLETED</td>
                        <td>150</td>
                    </tr> 
                        */}
                </tbody>
            </table>
        </div>
    )
}


export default TransactionHistory;