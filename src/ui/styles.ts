import styled, { keyframes } from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
  font-weight: 700;
  font-size: 2rem;
  color: #4CAF50;
  font-family: Montserrat, sans-serif;
`;

export const CardTitle = Title.extend`
  font-size: 1.5rem;
`;


export const StyledLink = styled.a`
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
  color: #2f2f2f;
  transition: all .2s ease-in-out;
  cursor: Pointer;
  :hover {
    color: rgba(0,0,0,0.48);
  }
`;

export const IconBar = styled.span`
  width: 100%;
  content: "";
  border-radius: 2px;
  height: 5px;
  margin: 2px 0;
  transition: all .2s ease-in-out;
`;

export const Icon = styled.span`
  width: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  > * {
    background-color: #4CAF50;
  }

  :hover {
    > * {
      background-color: #ffffff;
    }
  }
`;

export const Divider = styled.span`
  content: "";
  width: 100%;
  height: 2px;
  background-color: #4CAF50;
  opacity: .4;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  margin: 10px;
`;


export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Bar = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  font-family: Montserrat, sans-serif;
`;

export const Navi = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BreadText = styled.p`
  padding: 10px;
  line-height: 1.2;
`;

const fadeIn = keyframes`
  0% {
    box-shadow: none;
    opacity: 0;
  }
  30% {
  }
  60% {
    opacity: 1;
    background-color: #fff;
    box-shadow: none;
  }
  100% {
  }
`;

export const Card = styled.div`
  max-width: 100%;
  line-height: 1.2;
  width: 540px;
  padding: 20px;
  font-size: 1.4em;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
`;

export const AlignRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: justify;
  justify-content: flex-end;
`;

export const Button = styled.button`
  border: 3px solid #fff;
  border-radius: 2px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  padding: 20px;
  font-size: 1.5rem;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  :hover {
    color: #2f2f2f;
    border-color: #2f2f2f;
  }
`;