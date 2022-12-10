import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CollectArrival } from "./data/firebaseDB/visitorCollection";

import {visitorCount, visitorCollection, updateVisitor } from "./data/firebaseDB/sendOffs";

export default function CollectionAgreement(){
  visitorCount()
  CollectArrival()
  let oldUser = sessionStorage.getItem('data_id')
  if(!oldUser){
    const UserAgreement = async (e) =>{
      e.preventDefault()
      let form = document.getElementsByClassName('collectionWindowForm')[0]
      form.setAttribute('style', 'display:none')
      let sessionData = sessionStorage.getItem('data')
      let tree = JSON.parse(sessionData)
      visitorCollection(tree)
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
  }else{
    updateVisitor()
  }
}