import { Container, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => (
  <Container>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Container>
);

export default Actor;
