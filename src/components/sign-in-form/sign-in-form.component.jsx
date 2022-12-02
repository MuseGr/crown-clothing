import { useState } from "react"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.componetn"

import { signInAuthUserWithEmailAndPassword,
         createUserDocumentFromAuth ,
         signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [ formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    console.log(formFields)

    const signInGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const resetFormFields = () =>{
        console.log('ocisti')
        console.log(defaultFormFields)
        setFormFields(defaultFormFields)
    }

    const handleSubmint = async (event) =>{
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user with this email adres')
                    break 
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]:value})
    }

    return (
        <div className="sing-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmint}>
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

                <div className="buttons-container">
                    <Button type='submit' children='SIGN IN'/>
                    <Button type='button' buttonType='google'onClick={signInGoogle} children='Google Sign In'/>
                </div>
            </form>
        </div>
    )
}

export default SignInForm