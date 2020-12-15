import React from 'react';
import styled from 'styled-components';

const StyledText = styled.Text`
  color: #e00;
`;

export default function Button({ ...props }) {
  return (
    <>
      <StyledText>Hello</StyledText>
    </>
  );
}
