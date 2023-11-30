// import React from "react";
// import styles from './input.module.css';
// import Icon from "~shared/ui/icon";
//
// type Props = {
//   id?: string,
//   placeholder?: string,
//   type?: 'file',
//   disabled?: boolean,
//   value?: File | File[],
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
//   multiple?: boolean,
//   accept?: string
// }
//
// export const InputFile = (props: Props) => {
//   const {
//     id,
//       type = 'file',
//       disabled,
//       value,
//       placeholder
//   } = props;
//
//   const [file, setFile] = React.useState<File | File[] | null>(value);
//   const fileUploadClick = () => {
//     props.onChange && props.onChange({
//       target: {
//         files: file
//       }
//     });
//   };
//
//   const removeFile = (event) => {
//     event.stopPropagation();
//     setFile(null);
//   }
//
//   return (
//       <div className={ styles.formContainer } onClick={ fileUploadClick }>
//         <input className={ styles.formFile } id={ id } placeholder={ placeholder } type={ type }
//                disabled={ disabled }/>
//         <div className={ styles.formFileContainer }>
//           { value ? (
//               <>
//                 <div className={ styles.formFilename }>{ file }</div>
//                 <div className={ styles.formFileRemoveIcon } onClick={ (event) => removeFile(event) }>
//                   <Icon name='cancel' size={ 24 }/>
//                 </div>
//               </>
//           ) : (
//               <>{ placeholder }</>
//           ) }
//         </div>
//         <div className={ styles.formFileButton }>UPLOAD</div>
//       </div>
//   )
// }
