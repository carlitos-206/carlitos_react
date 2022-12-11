import React, {useState} from 'react';
import {ai_img_creator} from './data/djangoConnection/django_calls'


function AForm(){
  let id = sessionStorage.getItem('data_id')
  const[prompt, setPrompt] = useState(null)
  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(prompt, id)
    ai_img_creator(id, prompt)
  }
  return (
    <div>
        <input type='text' onChange={(e)=>{setPrompt(e.target.value)}}></input>
        <button onClick={handleSubmit} type='submit'>Send</button>
    </div>
    );
    }

export default AForm;
