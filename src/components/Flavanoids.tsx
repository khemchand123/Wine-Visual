import React, { useState, useEffect } from 'react';
import  flavanoids from './../utils/flavanoids';

const Flavanoids:React.FC = () => {
    const [flavanoidsData, setFlavanoidsData] = useState<null | string[][]>(null);
    useEffect(()=>{
        setFlavanoidsData(flavanoids());
    },[])

    return flavanoidsData == null ? (<h1>Shimmer</h1>) : (
        <div>
          <table className="data-table">
             <caption>Flavanoids</caption>
             <tbody>
             {
                flavanoidsData.map((innerArray, index)=>(
                    <tr key={index}>
                       {innerArray.map((entry, index) => (<td key={index}>{entry}</td>))}
                    </tr>
                ))
             }
             </tbody>
            
          </table>
       </div>
       )
}

export default Flavanoids;