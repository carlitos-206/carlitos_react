import React, {useState} from 'react';
import { addDoc, collection } from 'firebase/firestore';
// Generate a Unique ID
import { v4 as uuidv4 } from 'uuid';
import { db } from './data/firebaseDB/firebaseAuth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function ContactForm({formSource, deviceType}) {
  const[firstName, setFirstName] = useState(null);
  const[lastName, setLastName] = useState(null);
  const[email, setEmail] = useState(null);
  const[phoneNumber, setPhoneNumber] = useState(null)
  const[message, setMessage] = useState(null)

  const sendToFirebase=(e)=>{
    e.preventDefault()
    let data_id = sessionStorage.getItem('id')
    const entriesRef = collection(db, "connection_request");
    let unique_id = uuidv4()
    if(data_id !==null && data_id !=="" && data_id !==undefined ){
      addDoc(entriesRef,{
        id: unique_id,
        data_id: data_id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        date: new Date().toISOString()
      })
    }else{
      addDoc(entriesRef,{
        id: unique_id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        date: new Date().toISOString()
      })
    } 
    document.getElementById("contactForm").reset();
  }
  if(deviceType === 'monitor'){
    if(formSource === 'navBar'){
      return(
        <div className='contact_formDiv'>
          <Form id="contactForm" onSubmit={(e)=>{sendToFirebase(e)}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" onChange={ (e)=>{ setFirstName(e.target.value); } } required/>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" onChange={ (e) => {setLastName(e.target.value)} } required/>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" onChange={ (e) => {setEmail(e.target.value)} }  required/>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="2061234567" onChange={ (e) => {setPhoneNumber(e.target.value)} }  required/>
              <Form.Label>Message</Form.Label>
              <div className='form_message_navBar'>
                <textarea name="" id="" cols="45" rows="5" placeholder='Enter a Message' onChange={ (e) => {setMessage(e.target.value)} } ></textarea>
              </div>
            </Form.Group>
            <Button variant="danger" onClick={ (e)=>{ document.getElementById('contactForm').reset(); } } >Cancel</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
      )
    }
    if(formSource === 'demo'){
      return(
        <div>
          <Form>
            <Button></Button>
          </Form>
        </div>
      )
    }
  }
}