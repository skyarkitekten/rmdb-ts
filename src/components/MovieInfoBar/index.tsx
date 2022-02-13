import { convertMoney, calcTime } from "../../helpers";

import { Container, Content } from "./MovieInfoBar.styles";

type Props = {
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => (
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
