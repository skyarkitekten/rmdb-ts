import { Link } from "react-router-dom";
import { Container, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (
  <Container>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>•</span>
      <span>{movieTitle}</span>
    </Content>
  </Container>
);

export default BreadCrumb;
