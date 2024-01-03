import React, { Fragment } from "react";
import Ecllipse1 from "../../assets/ellipse-1.png"
import Ecllipse2 from "../../assets/ellipse-2.png"
import "./styles.css";

export default function ClockBackground() {
    return (
        <div className="Bg">
            <img src={Ecllipse1} className="Bg-Common" />
            <img src={Ecllipse2} className="Bg-Common" />
        </div>
    );
}