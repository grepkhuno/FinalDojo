import axios from 'axios'
import React, {useState, useEffect} from 'react'

function JokesAPI() {
    const [joke, setJoke]=useState('')
    useEffect(()=>{
        axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: "application/json" }}
          ).then((result)=>{
            console.log(result)
            setJoke(result.data.joke)
        }).catch((err)=>{
            console.log(err)
        })

    },[])
  return (
    <div>
        <h3>Daily jokes to brighten your day!</h3>
    <div className='border boder-warning '><div  onChange={(e) => setJoke(e.target.value)} > {joke}</div></div>


    </div>
  )
}

export default JokesAPI