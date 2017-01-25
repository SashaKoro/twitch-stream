import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Row = styled.tr`
`;

const Image = styled.img`
  height: 75px;
  width: 75px;
`;

const Name = styled.td`
`;

const A = styled.a`

`;

const Status = styled.td`
`;

const UserInfo = ({name, url, status, logo}) => {

  return (
    <table className="table table-hover">
      <tbody>
      <Row>
        <th><Image src={logo}/></th>
        <Name><A href={url}>{name}</A></Name>
        <Status>{status}</Status>
      </Row>
      </tbody>
    </table>
  );
};

export default UserInfo;



