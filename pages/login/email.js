import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useAuth } from '@/lib/auth';
import Layout from '@/components/Layout';
import Button from '../../components/Button';

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
      className="w-64 flex-col items-center"
      //   register={register}
    >
      {/* <div>
        <label>Full Name</label>
        <input
          autoFocus
          aria-label="Full Name"
          id="name"
          name="name"
          ref={register({
            required: 'Please enter your name.'
          })}
          placeholder="Full Name"
        />
      </div> */}

      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold font-mono p-2">
          Email Address
        </label>
        <input
          autoFocus
          aria-label="Email Address"
          className="p-2 font-mono"
          id="email"
          name="email"
          ref={register({
            required: 'Please enter your email.'
          })}
        />
        <span>{errors.email && errors.email.message}</span>
      </div>
      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold font-mono p-2">
          Password
        </label>
        <input
          aria-label="Password"
          name="pass"
          className="p-2 font-mono"
          id="password"
          type="password"
          ref={register({
            required: 'Please enter a password.'
          })}
        />
        <span>{errors.pass && errors.pass.message}</span>
      </div>
      <Button id="login" type="submit">
        Login
      </Button>
    </form>
  );
};

const LoginPage = () => (
  <Layout>
    <Login />
  </Layout>
);

export default LoginPage;
