import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="nav flex-column nav-pills col-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className='mb-5 mt-2'><h2>Eliott Morales</h2></div>
                <NavLink  className="nav-link"  id="v-pills-home-tab" data-toggle="pill" to="/Summary" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</NavLink>
                <NavLink className="nav-link"  id="v-pills-profile-tab" data-toggle="pill" to="/Certificates" role="tab" aria-controls="v-pills-profile" aria-selected="false">Certifications</NavLink>
                <NavLink className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="/Summary" role="tab" aria-controls="v-pills-messages" aria-selected="false">Summary</NavLink>
                <NavLink className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="/JokesAPI" role="tab" aria-controls="v-pills-settings" aria-selected="false">JokesAPI</NavLink>
            </div>
        </div>
    )
}

export default Nav