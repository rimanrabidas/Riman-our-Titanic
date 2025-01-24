import React from 'react'
import  "./Login.css"
const Login = () => {
  return (
    <div className='login'>
    
      <section className='section_contact2'>


<div className="grid2">
  <div className="contact_content2">
      <form className="grid_two2">
      <div className="container2">
  <h2 className='section_common_heading2'>Log-In</h2>
  <p className='section_common_sebheading2'>Doesn`t have an account you <a>Sing-Up</a></p>
</div>
        <div className='div2'>
          <h2 className='lable2' htmlFor='username'>Userame : </h2>
          <input className='imp' type="text" name='username' id='username' required autoComplete='off' placeholder='Enter Userame' />
        </div>
        
        <div className='div2'>
          <h2 className='lable2' htmlFor='email number'>Email Address : </h2>
          <input className='imp' type="email" name='email' id='email' required autoComplete='off' placeholder='Enter Your email or mobile no.' />
        </div>

        <div className='div2'>
          <h2 className='lable2' htmlFor='Password'>Password : </h2>
          <input className='imp' type="Password" name='Password' id='Password' required autoComplete='off' placeholder='Enter Your Password' />
        </div>
        <button className='btn2' type='Login'>Log In</button>
      </form>
  </div>


  <div className="grid-three-3">
  <img className='img' src="/public/login.png" alt="send me" />
  </div>


</div>
      </section>
      

    </div>
  )
}

export default Login;