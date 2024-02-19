import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function Departments() {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch("https://chrisco-church-endpoints.onrender.com/departments/all")
        .then(Response => Response.json())
        .then(data =>setDepartments(data));
    },[]);
    return (
        <div >
            <Header />
            <h1>Departments</h1>
            <div className="departments">
                {departments.map((department) => (
                    <div key={department.id} className="department-grid">
                            <img src={department.department_img} alt={department.title}/>
                            <strong><p>{department.title}</p></strong>
                            <p>{department.description}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}


export default Departments;
