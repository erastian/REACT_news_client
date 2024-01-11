import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";
import { InputText } from "~shared/ui/forms";
import { Button } from "~shared/ui/button";
import { useRegisterUser } from "~features/session/register";


interface IFormInputs {
  email: string;
  password: string;
  username: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  username: yup.string().required(),
}).required();

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: yupResolver(validationSchema)
  });

  const { mutate, isError, error } = useRegisterUser();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        navigate(PAGE_PATH.login);
      }
    })
  }

  const validateSubmit = Object.keys(errors).length > 0;


  return (
      <div className={ styles.container }>
        <h3>Registration</h3>
        <p className=''>Already have the account? <Link to={ PAGE_PATH.login }>Login</Link></p>
        <form onSubmit={ handleSubmit(onSubmit) } role='form' className={ styles.form } autoComplete='off'>
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
          <Controller
              name='username'
              control={ control }
              render={ ({ field }) => (
                  <InputText
                      type='text'
                      placeholder='Add your Username'
                      label='Username'
                      role='username'
                      error={ !!errors.username }
                      helperMessage={ errors.username?.message }
                      { ...field }
                  />
              ) }/>

          {isError && <div>{error?.message}</div>}

          <div className="">
            <Button type='submit' disabled={ validateSubmit }>REGISTER</Button>
          </div>
        </form>
      </div>
  )

}


