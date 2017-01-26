import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 900px;
  background-color: #D3B53D;
  margin: auto;
  height: 125px;
  margin-top: 75px;
`;

const P = styled.p`
  text-align: center;
  font-size: 48px;
  line-height: 125px;
  color: #093145;
`;

const Header = () => {
  return (
    <Div>
      <P>Twitch Streamers</P>
    </Div>
  );
};

export default Header;
