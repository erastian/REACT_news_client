import styles from './spinner.module.css';

export function Spinner() {
  return (
      <div className={styles.circular}>
        <div />
        <div />
        <div />
        <div />
      </div>
  )
}