import React from 'react'

function Nav() {
    return (
        <div>
            <div className="nav flex-column nav-pills col-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className='mb-5 mt-2'><h2>Eliott Morales</h2></div>
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/Summary" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/Certificates" role="tab" aria-controls="v-pills-profile" aria-selected="false">Certifications</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/Contact" role="tab" aria-controls="v-pills-messages" aria-selected="false">Contact</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/JokesAPI" role="tab" aria-controls="v-pills-settings" aria-selected="false">JokesAPI</a>
            </div>
        </div>
    )
}

export default Nav