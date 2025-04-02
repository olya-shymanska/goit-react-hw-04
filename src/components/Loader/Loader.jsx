import ClipLoader from "react-spinners/ClipLoader";
import css from './Loader.module.css'

export default function Loader({ loading }) {
    return (
    <div className={css.loaderContainer}>
        { loading && (
        < ClipLoader
            size = { 50}
    color = { "#36D7B7"}
    loading = { loading }
                /> )
            }
            </div>
    )

}