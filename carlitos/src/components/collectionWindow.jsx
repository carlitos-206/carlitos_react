import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CollectArrival } from "./data/firebaseDB/visitorCollection";
// Firabase Package
import { addDoc, collection } from 'firebase/firestore';
// Firebase Auth
import { db } from './data/firebaseDB/firebaseAuth';
// Generate a Unique ID
import { v4 as uuidv4 } from 'uuid';

export default function CollectionAgreement(){
  CollectArrival()

  function uploadToFirestore(tree) {
    const entriesRef = collection(db, 'visitorCollection');
    let unique_id = uuidv4()
    sessionStorage.setItem("id", unique_id)
    addDoc(entriesRef, {
      id: unique_id,
      location: {
        ip: tree.location.ip,
        city: tree.location.city,
        state: tree.location.state,
        postal: tree.location.postal,
        country: tree.location.country,
        timezone: tree.location.timeZone,
        timeDiff: tree.location.timeDiff,
        exact_location: {
          lat: tree.location.exactLocation.lat,
          lon: tree.location.exactLocation.lon,
        },
      },
      device: {
        type: tree.device.type,
        model: tree.device.model,
        vendor: tree.device.vendor,
        os:{
          name: tree.device.os.name,
          version: tree.device.os.version
        },
        cpu_architecture: tree.device.cpu_architecture,
        screenWidth: tree.device.screenWidth,
        screenHeight: tree.device.screenHeight,
      },
      browser: {
        name: tree.browser.name,
        version: tree.browser.version,
        engine:{
          name: tree.browser.engine.name,
          version: tree.browser.engine.version
        }
      },
      date_visited: new Date().toString(),
    });

  }
  const UserAgreement = async (e) =>{
    e.preventDefault()
    let form = document.getElementsByClassName('collectionWindowForm')[0]
    form.setAttribute('style', 'display:none')
    let sessionData = sessionStorage.getItem('data')
    let tree = JSON.parse(sessionData)
    uploadToFirestore(tree)
  }
  return(
    <div className="collectionWindowForm">
      <Form onSubmit={ (e)=>{ UserAgreement(e); } }>
        <p>I use essential cookies to make my site work. With your consent, I may also use non-essential cookies to improve user experience and analyze website traffic. By clicking “Accept,“ you agree to my website's cookie use as described in the <span><a href="/">Privacy Policy</a></span>.</p>
        <Button variant="primary"type="Submit">Accept</Button>
        {/* <label htmlFor="agree">Agree</label> */}
      </Form>
    </div>
  )
}