import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ loading }) {
    return (
    <div>
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