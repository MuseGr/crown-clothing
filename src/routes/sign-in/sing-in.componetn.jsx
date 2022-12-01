import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sing-up-form/sign-up-form.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
    }
    

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={ logGoogleUser }>
                Sing in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn