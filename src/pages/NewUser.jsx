import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formImg from '../assets/ladder.jpg';
import '../styles/NewUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NewUser = () => {
  const [name,setName]= useState('');
  const [email,setEmail] = useState('');
  const [profession,setProfession] = useState('');
  const [gender,setGender] = useState('');
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const data = await axios.post('https://newresapibackend.onrender.com/api/user' ,{
        name,
        email,
        profession,
        gender
        
      })
      console.log(data);
      if(data.status === 201){
        alert(data.data.msg)
        navigate('/AllUsers')
        console.log(data);
      }

    }catch(error){
      console.log(error)
      alert(error.response.data.msg.message)

    }
  }

  return (
    <main className='container pt-4'>
      <div className='row justify-content-evenly'>
        <div className='col-sm-12 col-md-6'>
        <Form className='p-3 shadow-lg  '>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput"
          className='fw-bold'>
            Name:
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Type a name"
          value={name}
          onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput"
          className='fw-bold'>
            Email:
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Type an email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput"
          className='fw-bold'>
            Profession:
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Type a profession"
          value={profession}
          onChange={(e)=>setProfession(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3 fw-bold">
          <Form.Label htmlFor="disabledSelect">
            Gender:
            </Form.Label>
          <Form.Select id="disabledSelect"
          value={gender}
          onChange={(e)=>setGender(e.target.value)}>
            <option>----</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </fieldset>
    </Form>
        </div>
        <div className='d-none d-lg-block col-lg-5'>
          <img src={formImg} alt="formImage"
          className='img-fluid p-2 shadow-sm scale' />
        </div>
      </div>
    </main>
  )
}

export default NewUser