import css from './ErrorMessage.module.css'

export default function ErrorMessage({ error }) {
    return (
    <div>
        { error && (
        <p className={css.errorMessage}>Whoops, something went wrong. Try reloading the page please!</p>
)} </div>)
};