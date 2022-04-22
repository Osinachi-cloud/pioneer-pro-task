import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    font-size: 1rem;
  @media screen and (max-width: 769px) {
    flex-wrap:wrap;
    flex-direction:column;
  }
`;