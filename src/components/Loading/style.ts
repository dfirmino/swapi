import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  border-radius: 5px;
  text-align: center;
  background-color: #000;

  @keyframes load {
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ball-holder {
  animation: load 1.3s linear infinite;
}
`;

export const Ring = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  margin: 0 auto;
  border: 4px solid #d4c213;
  border-radius: 100%;
`;

export const BallWrapper = styled.div`
  position: absolute;
  width: 12px;
  height: 45px;
  left: 17px;
  top: 0px;
`;

export const Ball = styled.div`
  position: absolute;
  top: -11px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: #d4c213;
`;
