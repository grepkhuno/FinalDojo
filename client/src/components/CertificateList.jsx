import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css";
import { Link, NavLink } from 'react-router-dom'


const CertificateList = () => {
    const [itemList, setItemList] = useState([])

    const [, setCertName] = useState('')
    const [, setCertProducer] = useState('')
    const [certArt, setCertArt] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8000/api/getCerts')
            .then((res) => {
                console.log(res.data)
                setItemList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>

            <h3>Certificates</h3>
            <NavLink to="/addCert">Add a Certificate</NavLink>

            <div className='d-flex col-8 mx-auto d-flex  '>
                <div className=''>Certificate Name</div>
                <div className='w-25'>Certificate Issuer </div>
                <div className='w-25'> </div>
            </div>
            {
                itemList.map((lista) => (
                    <div className=' mx-auto '>
                        <table className="table  mx-auto ">
                            <tbody>
                                <tr className=' '>
                                    <td className='border boder-warning w-25'><div  onChange={(e) => setCertName(e.target.value)} > {lista.certName}</div></td>
                                    <td className='border boder-warning w-25'><div onChange={(e) => setCertProducer(e.target.value)} > {lista.certProducer}</div></td>
                                    <td className='border boder-warning w-25' > <img src={lista.certArt} className="art" alt="art" />

                                    <Link className=' m-2' to={`/getCertByID/${lista._id}`}>details</Link>
                                    |
                                    <Link className=' m-2' to={`/getCertByID/${lista._id}`}>edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                ))
            }
        </div>
    )
};

export default CertificateList