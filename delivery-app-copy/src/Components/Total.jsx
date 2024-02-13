import React, { useState, useContext } from "react";
import { DeliveryContext } from './../App';
import Address from "./Address";

export default function Total () {
    const { name, setName } = useContext(DeliveryContext);
    const { address, setAddress } = useContext(DeliveryContext);
    const { count, setCount } = useContext(DeliveryContext);

    function countCost () {
        if (count < 10 && count > 0){
            if (name === "Yermakhan"){
                return 2000*0.9;
            }
            return 2000;
        }

        else {
            if (name === "Yermakhan"){
                return count * 150 * 0.9;
            }
            return count * 150;
        }
    } 
    return (
        <div className="Name" style={{  
            border: "dashed black 2px",
            padding: "10px",
            width: "700px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "15px",
            flexWrap: "wrap"
        }}>
            Name:<br/>
            {name}
            <br/>
            Address:<br/>
            {address}
            <br/>
            Price:<br/>
            {countCost()}
         </div>
    );
}