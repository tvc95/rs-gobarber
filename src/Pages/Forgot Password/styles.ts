import styled from 'styled-components';
import { shade } from 'polished';
import signUpBg from '../../assets/img/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  > a {
    color: #f4ede8;
    text-decoration: none;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    :hover {
      text-decoration: underline;
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.img`
  flex: 1;
  background: url(${signUpBg}) no-repeat center;
  background-size: cover;
  border: none;
`;
