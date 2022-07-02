import React, { FC, useState } from "react";


const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="form login-form">

      <input
        className="form__field login-form__field"
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="form__field login-form__field"
        type="password"
        name="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button
        className="form__submit login-form__submit"
      >
        Log in
      </button>
    </form>
  )
}


export default LoginForm;