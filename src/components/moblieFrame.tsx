import React, { ComponentProps } from 'react';
import styled from 'styled-components';

interface FrameProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

/** 모바일 환경 최적화 프레임 */
const MobileFrame: React.FC<FrameProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export default MobileFrame;
