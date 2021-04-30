export default function PlayerDetails({ cover, title, artist }) {
    var bgImg = {
        "backgroundImage": "url(" + cover + ")"
    };

    return (
        <div className='details'>
            <div className='details-img' style={bgImg}></div>
            <h3 className='details-title'>{title}</h3>
            <h4 className='details-artist'>{artist}</h4>
        </div>
    )
}
