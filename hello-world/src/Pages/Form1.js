import React, {useState} from 'react';
import {
  BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const Form1 = (props) => {

   function handleSubmit(){
    console.log(name)
    console.log(email)
   } 
  
    const [name, setName]=useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    return (
    <div>
      <form>
      <h1>{props.title}</h1>
      <label>Name  </label>
      <input type="text"
             value={name} onChange={(e) => setName(e.target.value) } style={{ marginLeft: '20px' }}
      ></input>

      <br></br><br></br>

      <label>BirthDate  </label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginLeft: '60px' }}></input>

      <br></br><br></br>

      <label>Email  </label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '20px' }}></input>
      
      <br></br><br />

      <button onClick={handleSubmit}>Submit</button>

      <br></br>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </form>
    </div>
  );
}

export default Form1;