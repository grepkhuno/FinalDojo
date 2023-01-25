import './App.css';
import Nav from './components/Nav'
import JokesAPI from './components/JokesAPI.jsx';
import Summary from './components/Summary';
import Certificates from './components/Certificates';
import CertificateList from './components/CertificateList'
import AddCertificates from './components/AddCertificates';
import React from 'react'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <div className="App d-flex ">
      <BrowserRouter>
        <div className=''>
          <Nav />
        </div>
        <Routes>
          <Route path='/' element={<Summary />} />
          <Route path='/Summary' element={<Summary />} />
          <Route path='/Certificates' element={<CertificateList />} />
          <Route path='/JokesAPI' element={<JokesAPI />} />
          <Route path='/getCertByID/:id' element={<Certificates/>} />
          <Route path='/addCert' element={<AddCertificates/>} />

                  </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
