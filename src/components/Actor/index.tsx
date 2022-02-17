import { Container, Image } from "./Actor.styles";

type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <Container>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Container>
);

export default Actor;
