import { RegisterPage } from '../pages';
import { RegisterPageConfirmation } from '../pages';
import { LoginPage } from '../pages';


import '../styles/sass/components/App.sass';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <RegisterPageConfirmation />
    </div>
  );
}

export default App;