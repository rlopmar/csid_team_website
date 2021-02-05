import styled from 'styled-components';
import { colors } from 'global';

const Wrapper = styled.section``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarCropper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
`;

const Img = styled.img`
  width: 60px;
  background-color: rgb(0, 0, 0, 0);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const Hr = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colors.secondary.boulder};
`;

const Icon = styled.img`
  height: 20px;
  width: auto;
  margin-right: 15px;
`;

const Contact = styled.ul`
  list-style: none;
  padding: 0 20px;
`;

const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const Specializations = styled.ul`
  padding: 0 20px;
`;

const Footer = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: row;
`;

const ContactButton = styled.button`
  position: relative;
  padding: 0px 20px;
  margin-left: 20px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0);
  border-style: solid;
  border-color: ${colors.secondary.scienceBlue};
  border-width: 1px;
  color: ${colors.secondary.scienceBlue};
  cursor: pointer;

  &:hover {
    color: white;
  }

  &:hover:after {
    transform: scaleY(1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background: ${colors.secondary.scienceBlue};
    z-index: -1;
    transition: transform 0.6s;
  }
`;

export default function AvatarTooltip(member, role) {
  const {
    avatar,
    name,
    phoneNumber,
    email,
    location,
    specializations,
    responsibilities,
  } = member;

  return (
    <Wrapper key={name + '-avatar-tooltip'}>
      <Header>
        <AvatarCropper>
          <Img src={avatar} />
        </AvatarCropper>
        <Title>
          <p style={{ fontWeight: 'bold', marginBottom: 0 }}>{name}</p>
          <p className='s2' style={{ marginTop: '5px' }}>
            {role.name}
          </p>
        </Title>
      </Header>

      <Contact>
        <ContactItem className='p2'>
          <Icon
            src='/Icons/entypo location.svg'
            style={{ marginLeft: '5px', marginRight: '17px' }}
          />
          {location}
        </ContactItem>
        <ContactItem className='p2'>
          <Icon src='/Icons/email.svg' />
          {email}
        </ContactItem>
        <ContactItem className='p2'>
          <Icon src='/Icons/phone.svg' />
          {phoneNumber}
        </ContactItem>
      </Contact>

      <Hr />

      <Specializations>
        <p>Specialized in</p>
        {specializations.map((s) => (
          <li style={{ marginLeft: '25px' }} key={s} className='p2'>
            {s}
          </li>
        ))}
      </Specializations>

      <Footer>
        <p
          className='s2'
          style={{ fontWeight: 'bold', color: colors.secondary.boulder }}
        >
          Want to know more about me?
        </p>
        <ContactButton className='s2'>Contact</ContactButton>
      </Footer>
    </Wrapper>
  );
}
