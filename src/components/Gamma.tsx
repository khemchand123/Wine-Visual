import React, { useState, useEffect } from 'react';
import gamma from './../utils/gamma';

const Gamma:React.FC = () => {
    const [gammaData, setGammaData] = useState<null | string[][]>(null);
    useEffect(()=>{
        setGammaData(gamma());
    },[])

    return gammaData == null ? (<h1>Shimmer</h1>) : (
        <div>
          <table className="data-table">
             <caption>Gamma</caption>
             <tbody>
             {
                gammaData.map((innerArray, index)=>(
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

export default Gamma;