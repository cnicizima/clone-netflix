import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = item.genres.map((genre) => genre.name);
    let description = item.overview;

    if (description.lenghth > 200) {
        description = description.substring(0, 200) + "...";
    }
    
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year"> {firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured-description">{description}</div>
            <div className="featured-buttons">
                <a href={`/watch/${item.id}`} className="featured-watchbtn">
                {' '}
                ► Assistir</a>
                <a href={`/list/add/${item.id}`} className="featured-listbtn">
                + Minha Lista</a>
            </div>
            <div className="featured-genres">
                <strong>Gêneros:</strong> {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
