import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    return (
        <div className="topbar">
            <FontAwesomeIcon className="logo" icon={faEarth} />
            <p1 className="topbar-text">my travel journal.</p1>
        </div>
    )
}
export default Topbar