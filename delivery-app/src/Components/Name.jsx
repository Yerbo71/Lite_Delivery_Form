import React, { useState, useContext, useRef, useCallback, useMemo } from "react";
import { DeliveryContext } from './../App';

export default function Name() {
    const { name, setName } = useContext(DeliveryContext);
    const [myName, setMyName] = useState(name);
    const formInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(myName);
    };

    const focusInput = useCallback(() => {
        formInputRef.current.focus();
    }, [formInputRef]);

    const submitButtonStyle = useMemo(() => ({
        marginLeft: "10px",
        padding: "1px 5px",
        border: "1px dashed black",
        cursor: "pointer",
    }), []); 

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
            <label style={{ width: "100%" }}>Your name</label>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={myName} 
                    ref={formInputRef}
                    onChange={(e) => setMyName(e.target.value)} 
                />
                <input type="submit" value="Submit" onClick={focusInput} style={submitButtonStyle} />
            </form>
        </div>
    );
}
