import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddCertificates = () => {
    const [certName, setCertName] = useState('')
    const [certProducer, setCertProducer] = useState('')
    const [certArt, setCertArt] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getCertByID/${id}`)
            .then((res) => {
                console.log(res.data)
                setCertName(res.data.certName)
                setCertProducer(res.data.certProducer)
                setCertArt(res.data.certArt)

            }).catch((err) => {
                console.log(err)
            })
    }, [id]);

    const cancelHandler = (e) => {
        navigate('/Certificates')
    }

   const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addCert', {
            certName,
            certProducer,
            certArt
        }).then((res) => {
            navigate('/Certificates')
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='col-6 mx-auto'>
            <h1>Add a Certificate</h1>
            <form>
                <label className='form-label'>Certification Name:</label>
                <input  className="form-control" type="text" onChange={(e) => setCertName(e.target.value)} />
                <label className='form-label'>Issuer:</label>
                <input className="form-control" type="text" onChange={(e) => setCertProducer(e.target.value)} />
                <label className='form-label'>Art:</label>
                <input  className="form-control" type="text" onChange={(e) => setCertArt(e.target.value)} />
               <button className='btn btn-info  mt-3'onClick={submitHandler}> Add Certificate</button>
            </form>
            <button className='btn btn-warning m-2' onClick={cancelHandler}  >Cancel</button>

        </div>
    )
}

export default AddCertificates