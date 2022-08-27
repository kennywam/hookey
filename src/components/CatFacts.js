import React, {useState, useEffect} from "react";
import NameCal from "./NameCalc";
import axios from "axios";


const CatFacts = () => {

    const [results, setResults] = useState([])

    useEffect(() => {
        const FetchData = async () => {
            const data = await axios.get('https://catfact.ninja/facts')  
            setResults(data)   
        }
       
    },[])

    const renderedResults = results.map((result) => {
        console.log(result)
        return (
            <div>
                {result.data}
            </div>
        )
    })
    console.log(renderedResults)
   
    return (
        <div>
            <div className="catSegment">
                <label className="label">Random cat facts</label>
                {renderedResults}
            </div>
        </div>
    )

}

export default CatFacts