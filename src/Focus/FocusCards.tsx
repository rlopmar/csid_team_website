import styled from 'styled-components';
import { colors } from 'global';
import Card from 'Card';
import { cards, CardInfo } from './focus';

const CardTitle = styled.h5`
  color: ${colors.primary.doveGray};
  margin-bottom: 0;
  height: 50%;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CardDescription = styled.p`
  height: 50%;
`;

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
      <CardBody>
        <CardTitle>{el.title}</CardTitle>
        {withDescription && <CardDescription>{el.body}</CardDescription>}
      </CardBody>
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
