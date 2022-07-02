import { FormPage } from './';
import { LoginForm } from '../components';


function LoginPage() {
  return (
    <FormPage
      className='login-page'
      label='Sign in'
      inviteText='Please login to your account'
      redirectText='Register now'
      redirectUrl='/'
      form={ <LoginForm /> }
    />
  )
}


export default LoginPage;