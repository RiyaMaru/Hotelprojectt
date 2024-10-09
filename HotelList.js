import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function HotelList(){
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const apiUrl = "http://localhost:5001/transactions";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const formateddata= data.map((info)=>{
        return(
            <tr>
                <td>Date:{info.date}</td>
                <td>Sales:{info.sale}</td>
                <td>Expense:{info.expense}</td>
            
                <button className='btn btn-info ' 
                onClick={() => navigate("/hotel/profit-loss")}>
                     View Profit/Loss
                </button>

            </tr>
        )
    })
    return(<table className="table" border={2}>{formateddata}</table>);
}

export default HotelList;