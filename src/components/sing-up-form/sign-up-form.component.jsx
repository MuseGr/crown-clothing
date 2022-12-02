import { useState } from "react"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.componetn"

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const resetFormFields = () =>{
        console.log('ocisti')
        console.log(defaultFormFields)
        setFormFields(defaultFormFields)
    }

    const handleSubmint = async (event) =>{
        event.preventDefault();
        
        if(password != confirmPassword){
            alert('password do not match')
            return
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }else
                console.log("user created encountered an error", error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]:value})
    }

    return (
        <div className="sing-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmint}>
                <FormInput type="text" required 
                label="Display Name"
                onChange={handleChange} 
                name='displayName' 
                value={displayName}/>

                <FormInput type="email" required 
                label="Email"
                onChange={handleChange} 
                name='email' 
                value={email}/>
                
                <FormInput type="password" required 
                label="Password"
                onChange={handleChange} 
                name='password' 
                value={password}/>

                <FormInput type="password" required 
                label="Confirm Password"
                onChange={handleChange} 
                name='confirmPassword' 
                value={confirmPassword}/>

                <Button type='submit' children='SIGN UP'/>
            </form>
        </div>
    )
}

export default SignUpForm