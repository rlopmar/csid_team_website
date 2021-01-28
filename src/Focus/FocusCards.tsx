import styled from 'styled-components';
import { colors, device } from 'global';
import Card from 'Card';
import { cards, CardInfo } from './focus';

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: ${colors.primary.doveGray};
`;

const CardBody = styled.p`
  font-size: 1rem;
`;

const Img = styled.img`
  height: 60px;
  width: auto;
  padding-top: 10px;
  filter: hue-rotate(5deg) brightness(0.7);
`;

function renderCard(el: CardInfo, withDescription: boolean) {
  return (
    <Card key={el.title}>
      <Img src={`/Icons/${el.icon}.svg`}></Img>
      <CardTitle>{el.title}</CardTitle>
      {withDescription && <CardBody>{el.body}</CardBody>}
    </Card>
  );
}

interface Props {
  withDescription?: boolean;
}

export default function Cards(props?: Props) {
  const withDescription = props ? props.withDescription : false;
  return cards.map((card) => renderCard(card, withDescription));
}
