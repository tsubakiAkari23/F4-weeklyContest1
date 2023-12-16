import React, { useState } from 'react';
import './password.css'
function Password(){
    const[passWord , setPassWord] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const[confirmPass , setConfirmPass] = useState('');
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);



    function handlepassword(e){
        const newPassword = e.target.value;
        setPassWord(newPassword);
        setIsPasswordValid(newPassword.length >= 8);
    }

    function handleConfirmPassword(e){
        const newConfirmPassword = e.target.value;
  
        setConfirmPass(newConfirmPassword)

        setDoPasswordsMatch(newConfirmPassword === passWord);
    }

    const handleSubmit = () => {
        if (isPasswordValid && doPasswordsMatch ) {
          alert('Form submitted successfully');
        } else {
          alert('Can’t submit the form. Please check your inputs.');
        }
      };
    
   

    return(
        <div>
            <div className='password-box'>
            <label htmlFor="password">Password</label>
            <input type="password" 
             id='password'
             value={passWord}
             onChange={handlepassword}
             style={{ borderColor : isPasswordValid ? 'green' : 'red' , borderRadius : '5px' , fontSize : '10px' }}
            />
            {
                passWord <= 8 && <p style={{ color: 'red' , fontSize:'15px' }}>Password must be 8  characters</p>
            }
            </div>
            <div className='password-box'>
            <label htmlFor="confirm-pass">Confirm Password</label>
            <input type="password" 
             id="confirm-pass"
             value={confirmPass}
             onChange={handleConfirmPassword}
             style={{ borderColor : doPasswordsMatch ? 'green' : 'red' ,  borderRadius : '5px' ,fontSize : '10px'}}
            />
            {
                !doPasswordsMatch && <p style={{ color: 'red' , fontSize:'15px' }}>Password Do Not Match</p>
            }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Password