import { PropsWithChildren } from 'react';
import { Container, DisplayWrapper } from './Layout.style';
import { Outlet } from 'react-router-dom';
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <DisplayWrapper>{children || <Outlet />}</DisplayWrapper>
    </Container>
  );
};
