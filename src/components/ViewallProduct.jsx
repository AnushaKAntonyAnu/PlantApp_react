import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewallProduct = () => {
    const[data,changeData]=useState(
        [
            {"sno":1,"plantcode":"121","plantname":"ZZ Plant","price":200},
            {"sno":2,"plantcode":"122","plantname":"Peace Lily","price":1500},
            {"sno":3,"plantcode":"123","plantname":"Snack Plant","price":100},
            {"sno":4,"plantcode":"124","plantname":"Aloe Vera","price":200},
            {"sno":5,"plantcode":"125","plantname":"Money Tree","price":300},
            {"sno":6,"plantcode":"126","plantname":"Jaba Plant","price":200}
        ]
    )
    return (
        <div>
            <NavBar/>
            <h3 align="center" ><u>ViewAll Plant</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped table-hover">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">sno</th>
                                        <th scope="col">Plantcode</th>
                                        <th scope="col">Plantname</th>

                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                {data.map(
                                    (value,index)=>{
                                        return                                <tbody>
                                        <tr>
                                            <th scope="row">{value.sno}</th>
                                            <td>{value.plantcode}</td>
                                            <td>{value.plantname}</td>
                                            <td>{value.price}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                        
                                )}
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallProduct