import React from 'react';

import './styles.css';

function Form() {
  return (
    <form method="post" action="">
      <p>
        <label htmlFor="email_login">Seu e-mail</label>
        <input
          id="email_login"
          name="email_login"
          required="required"
          type="text"
        />
      </p>

      <p>
        <label htmlFor="senha_login">Sua senha</label>
        <input
          id="senha_login"
          name="senha_login"
          required="required"
          type="password"
          placeholder="1234"
        />
      </p>
    </form>
  );
}

export default Form;
