import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: #000000;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    place-content: center;
    img {
        width: 300px;
        max-width: 90%;
    }
`;
export const WrapperCards = styled.div`
  display: flex;
  flex: 1;
  place-content: space-around;
  flex-wrap: wrap;
`;

export const WrapperLoading = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: #ffe919;
  padding-top: 20px;

  span {
      margin-top: 20px;
      left: 20px;
      display: flex;
  }
`;
