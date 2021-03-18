import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useAuth } from '@/lib/auth';
import Layout from '@/components/Layout';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { createWithEmail, signinWithEmail } = useAuth();
  const { handleSubmit, register, errors } = useForm();

  const onLogin = ({ email, pass }) => {
    setLoading(true);
    signinWithEmail(email, pass).catch((error) => {
      setLoading(false);
    });
  };

  return (
    <form
      errors={errors}
      onSubmit={handleSubmit((data) => onLogin(data))}
      //   register={register}
    >
      <div>
        <label>Email Address</label>
        <input
          autoFocus
          aria-label="Email Address"
          id="email"
          name="email"
          ref={register({
            required: 'Please enter your email.'
          })}
          placeholder="name@site.com"
        />
        <span>{errors.email && errors.email.message}</span>
      </div>
      <div>
        <label>Password</label>
        <input
          aria-label="Password"
          name="pass"
          id="password"
          type="password"
          ref={register({
            required: 'Please enter a password.'
          })}
        />
        <span>{errors.pass && errors.pass.message}</span>
      </div>
      <button id="login" type="submit">
        Login
      </button>
    </form>
  );
};

const LoginPage = () => (
  <Layout>
    <Login />
  </Layout>
);

export default LoginPage;
