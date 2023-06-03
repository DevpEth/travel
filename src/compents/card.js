const Card = (props) => {
    return(
        <div className="image-container">
            <img className="travel-image" src={props.image} ></img>
        <div className="text-container">
            <p1 className="location">{props.location}</p1>
            <p2 className-="map"><a href={props.map}>View on Google Maps</a></p2>
            <h1 className="title">{props.title}</h1>
            <h2 className="start-date">{props.start} - {props.end}</h2>
            <p2 className="desc">{props.desc}</p2>
        </div>
        </div>
    )
}
export default Card