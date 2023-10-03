import Film from "./Film"


const FilmList = ({filmsProp}) => {

    const listofFilms = filmsProp.map((film) => {
        return (<li><Film key={film.id} name={film.name}>{film.url}</Film></li>)
    })
    



    return (
    <>
    <ul>
        <li>
            {listofFilms}
        </li>
    </ul>  
    </>
    )
}

export default FilmList