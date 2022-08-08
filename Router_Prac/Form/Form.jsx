import {useRef, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Form() {

    const idInput = useRef(null);
    const psInput = useRef(null);
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [idcheck, setIdCheck] = useState(false)
    const [pscheck, setPsCheck] = useState(false)
    const handleClick = (e) => {
      e.preventDefault();
      if(idcheck && pscheck){  
        psInput.current.value = '';
        idInput.current.value = '';
      }
      else if ( idcheck || false ) {
        psInput.current.value = '';
        psInput.current.focus();
      }
      else {
        idInput.current.value = '';
        idInput.current.focus();
      }
    }
    const handleChange = (e) => {
      if(e.target.name === 'id'){
        setId(e.target.value);
          if(id.length >= 4 && id.length <= 18){
            setIdCheck(true)
          }
          else setIdCheck(false)
        console.log(id)
        console.log(idcheck)
      }
      else if (e.target.name === 'password'){
        setPassword(e.target.value);
        if(password.length >= 11  && password.length <= 18){
          setPsCheck(true)
        }
        else setPsCheck(false)
        console.log(password)
        console.log(pscheck)
      }
    }
  
  
    return (
      <div>
      <div>
        <input
          type="text"
          ref={idInput}
          control={id}
          name='id'
          placeholder='6글자 이상 20글자 이하'
          onKeyUp={((e) => handleChange(e))}
        />
        { idcheck ? null : <span>ID 유효성 검사 실패 </span>}
      </div>
      <div>
        <input
          type="text"
          ref={psInput}
          control={password}
          name='password'
          placeholder='12글자 이상 20글자 이하'
          onChange={((e) => handleChange(e))}
        />
        { pscheck ? null : <span>Password 유효성 검사 실패 </span> }
      </div>
      <Link to={`/hello`}>
        <button
          type="button" 
          onClick={idcheck && pscheck ? undefined : handleClick } 
          disabled={id.length > 0 && password.length > 0 ? false : true}
          >
          회원가입
        </button>
      </Link>        
    </div>
        
    );
  }
  

