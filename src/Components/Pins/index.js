import { Fragment, useEffect, useState } from "react";
import Pin1 from "../../assets/pin-1.png";
import Pin2 from "../../assets/pin-2.png";
import Pin3 from "../../assets/pin-3.png";
import "./styles.css";

export default function Pins() {

    const [hour, setHour] = useState(2);
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(45);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setHour(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Pins">
            <div className="PinContainer" >
                <img src={Pin1} className="Common-Pin" />
            </div>
            <div className="PinContainer">
                <img src={Pin2} className="Common-Pin" />
            </div>
            <div className="PinContainer">
                <img src={Pin3} className="Common-Pin" />
            </div>
        </div>
    );
}