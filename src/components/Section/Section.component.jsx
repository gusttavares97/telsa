import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Wrap,
  ItemText,
  ButtonsContainer,
  ButtonGroup,
  LeftButton,
  RightButton,
} from './Section.style';

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <ButtonsContainer>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Fade>
        </ButtonGroup>
      </ButtonsContainer>
    </Wrap>
  );
};
export default Section;
