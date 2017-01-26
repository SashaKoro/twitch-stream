import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Row = styled.tr`
  color: white;
`;

const Image = styled.img`
  height: 75px;
  width: 75px;
  border: 5px solid #D3B53D;

  &:hover {
    border: 3px solid #EFD469;
  }

`;

const Name = styled.td`
  line-height: 75px;
  color: #D3B53D;
`;

const A = styled.a`
  font-size: 24px;
  color: #D3B53D;

  &:hover {
    color: #EFD469;
    text-decoration: none;
  }
`;

const Status = styled.td`
  text-align: center;
  font-size: 20px;
`;

const P = styled.p`
  margin-top: 22px;
`;

const UserInfo = ({name, url, status, logo}) => {

  return (
    <Row>
      <th><a href={url}><Image src={logo}/></a></th>
      <Name><A href={url}>{name}</A></Name>
      <Status><P>{status}</P></Status>
    </Row>
  );
};

export default UserInfo;
