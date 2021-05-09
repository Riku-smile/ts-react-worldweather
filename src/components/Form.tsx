type Props = {
    city: string,
    getWeather: (e: any) => void,
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<Props> = ({city, setCity, getWeather}) => {

    return (
        <form className="form" onSubmit={getWeather}>
            <div className="form--content">
            <input className="form--input"
                type="text" name="city" placeholder="city name"
                onChange = {e => setCity(e.target.value)} value={city} />
                <span className="form--note">*ローマ字で入力してください</span>
            </div>

            <button className="form--btn" type="submit">Get Weather</button>
        </form>
    )
}

export default Form;