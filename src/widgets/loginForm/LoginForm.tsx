import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login.module.css'
import { PAGE_PATH } from "~shared/config";
import { InputText } from "~shared/ui/forms";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "~shared/ui/button";
import { useLoginUser } from "~features/session";

interface IFormInputs {
  email: string;
  password: string;
}

// interface Props {
//   login: (data: IFormInputs) => void;
// }

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
}).required();

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema)
  });

  const { mutate, isError, error } = useLoginUser();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        const {accessToken} = response;
        localStorage.setItem('accessToken', accessToken);
        navigate(PAGE_PATH.root);
      },
    })
  }

  const validateSubmit = Object.keys(errors).length > 0;

  return (
      <div className={ styles.loginContainer }>
        <h3>Login into account</h3>

        {isError && <div>{error?.message}</div>}

        <form role='form' autoComplete='off' onSubmit={ handleSubmit(onSubmit) }>
          <Controller
              name='email'
              control={ control }
              render={ ({ field }) => (
                  <InputText
                      type='email'
                      placeholder='Add email here'
                      label='Email'
                      role='email'
                      error={ !!errors.email }
                      helperMessage={ errors.email?.message }
                      { ...field }
                  />
              ) }/>
          <Controller
              name='password'
              control={ control }
              render={ ({ field }) => (
                  <InputText
                      type='password'
                      placeholder='Add password here'
                      label='Password'
                      role='password'
                      error={ !!errors.password }
                      helperMessage={ errors.password?.message || 'password must be at least 8 characters' }
                      { ...field }
                  />) }
          />
          <p><Link to={ PAGE_PATH.forgot }>Forgot Password?</Link></p>
          <div className="">
            <Button type='submit' disabled={ validateSubmit }>LOGIN</Button>
          </div>
        </form>
      </div>
  );
}
