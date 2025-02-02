
import React, { useContext, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { useFormik } from 'formik'; 
import { loginSchema } from './schemas'; 
import { valProps, AppProps } from './interfaces';
import { ReactElement } from 'react';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import Cookies from 'react-cookie';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (params: any) => void;
          renderButton: (element: HTMLElement | null, options: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}

const initializeGoogleAPI = (handleCallbackResponse: (response: any) => void) => {
  if (typeof window !== 'undefined' && window.google && window.google.accounts) {
    window.google.accounts.id.initialize({
      client_id: '833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    window.google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      them: 'outline',
      size: 'large',
    });
    window.google.accounts.id.prompt();
  }
};

function Login(): ReactElement {
  const { darkModeOn, user, setUser } = useContext<AppProps>(Context);
  const navigate = useNavigate();

  function goToSignup() {
    navigate('/signup');
  }

  const onSubmit = async (values: any, actions: any): Promise<void> => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({email: values.email, password: values.password}),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const data = await response.json();
      if (data.status === 200) {
        const time = new Date();
        time.setHours(time.getHours() + 2);
        (Cookies as any).set('token', data.token, { expires: time });

        const userObject: any = jwtDecode<JwtPayload>(data.token);
        setUser(userObject);
        navigate('/');
      }
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  }: valProps = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    function handleCallbackResponse(response: any) {
      const userObject: any = jwtDecode<JwtPayload>(response.credential);
      setUser(userObject);
    }

    initializeGoogleAPI(handleCallbackResponse);
  }, [setUser]);

  return (
    <>
      <div role='login' className={darkModeOn ? 'login-page-dark' : 'login-page-light'}>
        <div className={darkModeOn ? 'auth-1' : 'auth-2'}>
          <div id='signInDiv'></div>
        </div>

        <form
          autoComplete='off'
          className={darkModeOn ? 'login1' : 'login2'}
          onSubmit={handleSubmit}
        >
          <label htmlFor='email'>Email</label>
          <input
            value={values.email}
            onChange={handleChange}
            id='email'
            type='email'
            placeholder='Enter your email'
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {errors.email && touched.email && <p className='error'>{errors.email}</p>}

          <label htmlFor='password'>Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            id='password'
            type='password'
            placeholder='Enter your password'
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {errors.password && touched.password && <p className='error'>{errors.password}</p>}
          <div className='login-box'>
            <button
              role='login-button'
              id={darkModeOn ? 'login-button1' : 'login-button2'}
              type='submit'
              disabled={isSubmitting}
            >
              Login
            </button>
            <button
              onClick={goToSignup}
              id={darkModeOn ? 'login-button1' : 'login-button2'}
            >
              Sign-up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;