import React from "react";
import CatFacts from "./CatFacts";

const NameCal = () => {
    const [name, setName] = React.useState('Kennedy')

 return (
    <div> 
        <div className="nameCal">
            <div className="NameSegment">
                <label>Mr. {name}</label>
                <input 
                    className="input"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
       
            </div>
        </div>
        
    <div className="catStuff">        
        <CatFacts/>
    </div>
    </div>
   
 )
}

export default NameCal;