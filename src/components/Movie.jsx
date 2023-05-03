


const imgApi = 'https://image.tmdb.org/3/t/p/w1280'

const Movie = ({ title, overview, poster_path, release_date }) => {
    return (
        <div className = 'movie'>
            <div className='card'>
                <img src={ imgApi+poster_path} alt={title} />
                <div className="cp">
                    <p> {overview} </p>
                </div>
            </div>
            <h2> {title} </h2>
            <h4> {release_date} </h4>
        </div>
    )
}

export default Movie; 