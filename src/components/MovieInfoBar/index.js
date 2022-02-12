import { convertMoney, calcTime } from "../../helpers";

import { Container, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Container>
    <Content>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Container>
);

export default MovieInfoBar;
