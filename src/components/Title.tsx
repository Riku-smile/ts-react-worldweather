const Title: React.FC = () => {
    var date = new Date();
    var weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sut'];
    var today = date.getMonth()+1 + "/" + date.getDate() + ", " + weekDay[date.getDay()] + ".";
    return (
        <h1 className="app--headline">World Weather on {today}</h1>
    )
};

export default Title;