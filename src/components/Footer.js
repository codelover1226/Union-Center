import * as React from "react";
import PageButton from "./PageButton/PageButton";

export default function Footer(props) {
    
    console.log(props.history);
    return (
        
        <div>
            <div className="py-4 px-4 z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
                <p className="text-white"></p>
                <PageButton />
            </div>  
        </div>
    );
}