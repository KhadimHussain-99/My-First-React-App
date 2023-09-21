import logo from './location-icon.svg'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--desc">
                <div className="desc--container">
                    <img src={logo} className="location--icon"/>
                    <p className="country--name">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="place--name">{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className="place--desc">{props.description}</p>
            </div>
        </div>
    )
}