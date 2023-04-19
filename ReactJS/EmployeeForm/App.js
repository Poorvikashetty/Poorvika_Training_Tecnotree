import React from 'react';
import Emp from './emp.gif';

function App() {
  return (
    <div>
      <h1>HRMS</h1>
       <img src={Emp} alt="Image not found"/>
       <form>
        <input type='text' name='text' placeholder='Your Name' class='write'/><br/>
        <input type='number' name='id' placeholder='Your Employee ID' class='write'/><br/>
        <input type='email' name='email' placeholder='Your Email ID' class='write'/><br/>
        <input type='date' name='date' placeholder='Your DOB' class='write'/><br/>
        <input type='password' name='pwd' placeholder='Your Password'class='write'/><br/>
        <button type='submit'>Signin</button>
        <button >Exit</button>
       </form>
    </div>
  );
}

export default App;
