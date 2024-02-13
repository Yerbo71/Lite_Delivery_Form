import React, {useState, useContext, useRef} from "react";
import { DeliveryContext } from "../App";
export default function Address () {
    const { address, setAddress } = useContext(DeliveryContext);
    const  [myAddress, setMyAddress] = useState(address);
    const formInputRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setAddress(myAddress);
    };

    const focusInput = () => {
        formInputRef.current.focus();
    };


    return (
        <div className="Addres"style={{  
            border: "dashed black 2px",
            padding: "10px",
            width:"700px",
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            flexDirection:"row",
            marginTop:"15px",
            flexWrap: "wrap"
            }}>
            <label style={{width:"100%"}}>Address</label>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={myAddress}
                ref={formInputRef}
                onChange={(e) => setMyAddress(e.target.value)}
            ></input>
            <input type="submit" value="Submit" onClick={focusInput}
                style={{
                    marginLeft: "10px",
                    padding: "1px 5px",
                    border: "1px dashed black",
                    cursor: "pointer",
                }}
            />
            </form>
        </div>
    );
}