
const Coctails = ({data}) => {
    return (
        <div>
            <div className="coctail">
                <img className="img" src={data.strDrinkThumb}/>
                <h1>{data.strDrink}</h1>
                <p>{data.strInstructions}</p>
            </div>
        </div>
    )
}

export default Coctails