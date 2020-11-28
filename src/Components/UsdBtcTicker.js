import { React, useEffect, useState } from 'react'

function BtcUsdTicker() {

    // Create websocket to connect with Binance API
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')

    // State and hook to update state
    const [data, setData] = useState([]);

    useEffect(() => {
        socket.onmessage = (e) => {
            let data_obj = JSON.parse(e.data);
            let price = data_obj.p
            setData(currentData => [...currentData, price])
        }
    })
    return (
        <div>
            <h4>{data}</h4>
        </div>
    )
}

export default BtcUsdTicker