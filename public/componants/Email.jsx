import React,{useState} from "react";


function Email (){
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    function hanldleInput(e){
        setEmail(e.target.value);
    }
    const handleEmailBlur = () => {
        // Regular expression for a simple email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        setIsEmailValid(emailRegex.test(email));
      };

     

    return(
        <>
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text"
                 id="email" 
                 value={email}
                 onChange={hanldleInput}
                 onBlur={handleEmailBlur}
                 style={{borderColor: isEmailValid ? 'green' : 'red' , textDecoration : 'none' , borderRadius : '5px' ,fontSize : '10px' , width:'100%'}}
                 />
                {!isEmailValid && <p style={{ color: 'red' , fontSize:'15px' }}>Enter a valid email address</p>}
            </div>

            
        </>
    )
}

export default Email