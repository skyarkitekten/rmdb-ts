import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Thumb from "../Thumb";
import { Container, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Container backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>OVERVIEW</h3>
        <p>{movie.overview}</p>
        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="rating">{movie.vote_average}</div>
          </div>
          <div className="directors">
            <h3>DIRECTOR{movie.directors.length ? "S" : ""}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Container>
);

export default MovieInfo;
