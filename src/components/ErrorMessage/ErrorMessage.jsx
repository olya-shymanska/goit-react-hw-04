export default function ErrorMessage({ error }) {
    return (
    <div>
        { error && (
        <p>Whoops, something went wrong. Try reloading the page please!</p>
)} </div>)
};