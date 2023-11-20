import React, { forwardRef, useState } from "react";
import styles from './input.module.css';
import Icon from "~shared/ui/icon";
import cn from "classnames";

type Props = {
  id?: string,
  label?: string,
  helperMessage?: string,
  error?: boolean,
  type?: React.HTMLInputTypeAttribute
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Props;
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props;
type RefType = HTMLInputElement & HTMLTextAreaElement;

export const InputText = forwardRef<RefType, InputProps & TextAreaProps>((props, ref) => {
  const {
    id,
    type = 'text',
    label,
    value,
    placeholder,
    helperMessage,
    error = false,
    disabled,
    ...attrs
  } = props;

  const [ inputType, setInputType ] = useState<React.HTMLInputTypeAttribute>(type);

  const togglePwdShow = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
      <div className={ cn(styles.inputHolder, error && 'error', disabled && 'disabled') }>
        { label && <label className={ styles.formLabel } htmlFor={ id }>{ label }</label> }

        { (type === 'text' || type === 'email') && (
            <input className={ styles.formInput } id={ id } type={ type } value={ value }
                   placeholder={ placeholder } disabled={ disabled } ref={ref} { ...attrs }/>
        ) }

        { type === 'textarea' &&
            <textarea className={ styles.formTextarea } id={ id } value={ value } placeholder={ placeholder }
                      disabled={ disabled } ref={ref} { ...attrs }/> }
        { type === 'password' && (
            <><input className={ styles.formInput } id={ id } type={ inputType } value={ value }
                     placeholder={ placeholder } disabled={ disabled } ref={ref} { ...attrs }/>
              <div className={ styles.pwdIcon } onClick={ togglePwdShow }>
                <Icon size={ 24 } name={ `${ inputType === 'password' ? 'eye-slash' : 'eye' }` }/>
              </div>
            </>
        ) }
        { helperMessage && (
            <div className={ styles.formMessage }>
              <Icon size={ 20 } name={ error ? 'error' : 'info' }/>
              <span>{ helperMessage }</span>
            </div>
        ) }
      </div>
  );
})