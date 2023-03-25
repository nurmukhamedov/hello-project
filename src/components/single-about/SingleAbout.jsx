import { useParams } from "react-router-dom"
const SingleAbout = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <div>SingleAbout {id}</div>
    )
}

export default SingleAbout