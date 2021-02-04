import styled from 'styled-components';
import { colors } from 'global';
import Card from 'Card';
import { cards, CardInfo } from './focus';

const CardTitle = styled.h5`
  color: ${colors.primary.doveGray};
`;

const CardBody = styled.p``;

const Img = styled.img`
  z-index: -1;
  height: 60px;
  width: auto;
  padding-top: 10px;
  filter: hue-rotate(20deg) brightness(1);
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
