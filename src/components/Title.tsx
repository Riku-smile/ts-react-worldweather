type Props = {
    today: string
}

const Title: React.FC<Props> = (today) => {

    return (
        <h1 className="app--headline">{today} World Weather</h1>
    )
};

export default Title;