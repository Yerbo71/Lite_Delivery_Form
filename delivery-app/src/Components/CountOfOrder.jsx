import React, {useContext,useState,useRef} from "react";
import {DeliveryContext} from "./../App";

export default function CountOfOrder () {
    const {count, setCount} = useContext(DeliveryContext);
    const [myCount,setMyCount] = useState(count);
    const formInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(myCount);
    }

    const focusInput = () => {
        formInputRef.current.focus();
    }
    
    return (
        <div className="Count"style={{  
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
            <label style={{width:"100%"}}>Count</label>
            <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                min="0" 
                max="100" 
                pattern="^[1-9]\d*$"
                value={myCount}
                ref={formInputRef}
                onChange={(e) => setMyCount(e.target.value)}
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