import React, { useState } from 'react';
import MockData from '../MOCK_DATA.json'

const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const [data, setdata] = useState(MockData);
    const [order, setorder] = useState("ASC");
    const sorting =(col)=>{
        if (order === "ASC") {
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    };

    return ( 
        <div className="container">
            <input type="text" placeholder="Write Here..." className="form-control mt-3 mb-3" onChange={(e) => {
                setsearchTerm(e.target.value);
            }}/>
            <table className="table">
                <thead>
                        <th onClick={() => sorting("username")} >Username</th>
                        <th onClick={() => sorting("full_name")} >Name</th>
                        <th onClick={() => sorting("email")} >Email</th>
                        <th onClick={() => sorting("gender")} >Gender</th>
                        <th onClick={() => sorting("date")} >Registered Date</th>
                </thead>
                <tbody>
                    {MockData.filter((val) => {
                        if(searchTerm ==="") {
                            return val;
                        } else if(
                            val.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.date.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                    }).map((m) => (
                        <tr key={m.id}>
                            <td>{m.username}</td>
                            <td>{m.full_name}</td>
                            <td>{m.email}</td>
                            <td>{m.gender}</td>
                            <td>{m.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default SearchTable;