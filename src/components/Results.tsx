type Props = {
    results: any
}

const Results: React.FC<Props> = ({results}) => {
    const { cityName, country, temperature, conditionText, icon } = results;

    return(
        <div className="results">
            {cityName && <div className="results--city">{cityName},</div>}
            {country && <div className="results--country">{country}</div>}
            {
                conditionText &&
                <div className="text">
                    <span className="text--span">{conditionText}</span>
                    <img className="text--icon" src={icon} alt={cityName}/>
                </div>
            }
            {
                temperature &&
                <div className="results--temp">{temperature}
                    <span className="results--unit">℃</span>
                </div>
            }
        </div>
    )
}

export default Results;