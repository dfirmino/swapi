import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 210px;
    border: 1px solid #ffe919;;
    background: #ffe919;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
    width: 400px;
    margin: 10px;
`;

export const Title = styled.div`
    font-family: "Starjedi";
    font-size: 20px;
    color: #000;
    position: relative;
    place-items: center;
    place-content: center;
    text-align: center;
    &::after {
        position: absolute;
        content: '';
        height: 5px;
        width: 50%;
        left: 50%;
        background: #000;
        bottom: -10px;
        transform: translateX(-50%);
    }
`;

export const Crawl = styled.div`
    color: #000;
    padding: 20px;
    text-align: center;
    white-space: normal;
    height: 100px;
    overflow: hidden;
    position: relative;
    line-height: 20px;
    margin-top: 10px;
`;

export const WrapperReadMore = styled.div`
    display: flex;
    flex: 1;
    place-content: flex-end;
    align-content: flex-end;

    button {
      color: #ffe919;
      background: transparent;
      cursor: pointer;
      background: #000;
      border: 1px solid #000;
      font-weight: bold;
      transition: all 0.3s linear;
      margin-top: 10px;
      padding: 5px;
      font-family: "Starjedi";
      border-radius: 3px;
      &:hover {
          background: #ffe919;
          color: #000;
          border-color: #000;
      }
    }
`;
