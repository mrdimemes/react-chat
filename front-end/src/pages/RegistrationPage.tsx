import { FormPage } from './';
import { RegistrationForm } from '../components';


function RegistrationPage() {
  return (
    <FormPage
      className='registration-page'
      label='Registration'
      inviteText='To enter the chat, you need to register'
      redirectText='Sign in to your account'
      redirectUrl='/'
      form={ <RegistrationForm /> }
    />
  )
}


export default RegistrationPage;