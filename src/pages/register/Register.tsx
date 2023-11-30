import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { RegisterForm } from "~widgets/registerForm";

export function Register() {
  useDocumentTitle('News Portal: Register');

  return (
      <div className='d-col-7 m-auto'>
        <RegisterForm />
      </div>
  )
}