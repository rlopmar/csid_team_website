import styled from 'styled-components';
import { device } from 'global';

const Container = styled.section`
  margin-top: 100px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media${device.mobileL} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 0;
`;

const AvatarWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media${device.mobileL} {
    margin-top: 50px;
  }
`;

const AvatarCropper = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  border-color: white;
  margin: 0px 10px;
`;

const Avatar = styled.img`
  height: 180px;
  width: auto;
`;

const ManagerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;


@media${device.mobileL}{
  margin-left: 40px;
  
`;

const Name = styled.h5`
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
`;

const ContactInformation = styled.ul`
  padding-left: 0;
  color: white;
`;

const ContactItem = styled.h6`
  list-style: none;
  margin-bottom: 10px;
  margin-top: 0;
`;

const Icon = styled.img`
  height: 25px;
  margin-right: 20px;
`;

export default function Manager() {
  return (
    <Container>
      <Title>Managed by</Title>
      <Body>
        <AvatarWrapper>
          <AvatarCropper>
            <Avatar src='/Avatars/Barry-Cunningham.png' />
          </AvatarCropper>
        </AvatarWrapper>
        <ManagerDetails>
          <Name>Barry Cunningham</Name>
          <ContactInformation>
            <ContactItem className='s1'>
              <Icon
                src='/Icons/entypo location.svg'
                style={{ marginLeft: '7px' }}
              />
              St. Leon Rot, Germany
            </ContactItem>

            <ContactItem className='s1'>
              <Icon src='/Icons/email.svg' />
              barry.c@sap.com
            </ContactItem>

            <ContactItem className='s1'>
              <Icon src='/Icons/phone.svg' />
              +49 14259 25360
            </ContactItem>
          </ContactInformation>
        </ManagerDetails>
      </Body>
    </Container>
  );
}
