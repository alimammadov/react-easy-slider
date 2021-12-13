import React, {useState} from 'react'
import styled from "styled-components";
import arrowRight from './assets/arrowRight.svg'
import arrowLeft from './assets/arrowLeft.svg'
import breakpoint from './breakpoints';

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
 
`;

const Arrow = styled.div `
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${ (props) => props.direction === "left" && "10px"};
  right: ${ (props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div `
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${ (sliderItems) => sliderItems.slideIndex * -100}vw);
`;
const Slide = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${ (sliderItems) => sliderItems.bg};

  @media only screen and ${breakpoint.device.xs}{
        display: flex;
        flex-direction:column;
    }
    @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction:column;
    }
    @media only screen and ${breakpoint.device.lg}{
        display: flex;
        flex-direction:column;
    }}
`;
const ImgContainer = styled.div `
  height: 100%;
  flex: 1;
  @media only screen and ${breakpoint.device.xs}{
       height: 50vh;
       width: 100%;
    }
    @media only screen and ${breakpoint.device.sm}{
        height: 50vh;
        width: 100%;


    }
    @media only screen and ${breakpoint.device.lg}{
        height: 50vh;

    }}
`;
const Image = styled.img `
  height: 100%;
  width: 100%;
  object-fit:cover;
`;
const InfoContainer = styled.div `
  flex: 1;
  padding: 50px;
  @media only screen and ${breakpoint.device.xs}{
        display: flex;
        flex-direction:column;
        padding: 0px 10px;
        line-height: 1.3;
    }
    @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction:column;
        padding: 0px 10px;
        line-height: 1.3;
    }
    @media only screen and ${breakpoint.device.md}{
        display: flex;
        flex-direction:column;
        padding: 0px 10px;
        line-height: 1.3;
    }
    @media only screen and ${breakpoint.device.lg}{display: flex;}}
`;
const Title = styled.h1 `
  font-size: 70px;
  color: #${ (sliderItems) => sliderItems.color};

  @media only screen and ${breakpoint.device.xs}{font-size:20px;}
    @media only screen and ${breakpoint.device.sm}{font-size:30px;}
    @media only screen and ${breakpoint.device.sm}{font-size:30px;}
    @media only screen and ${breakpoint.device.lg}{font-size:30px;}}
`;
const Desc = styled.p `
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #${ (sliderItems) => sliderItems.color};

`;
const Button = styled.button `
  padding: 10px;
  font-size: 20px;
  background-color: #fff;
  font-weight:500;
  text-transform:uppercase;
  cursor: pointer;
  color: rgb(0, 0, 0);
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 2px;
  background: rgb(255, 255, 255);
}
`;
const EasySlider = ({sliderItems}) => {
    const [slideIndex,
        setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0
                ? slideIndex - 1
                : 2);
        } else {
            setSlideIndex(slideIndex < 2
                ? slideIndex + 1
                : 0);
        }
    };
    const [url,
        setUrl] = useState('')
    const openThisLink = (e) => {
        e.preventDefault();

        if (url) {

            window.open(url, '_blank');
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <img src={arrowLeft} alt='Left'/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title color={item.color}>{item.title}</Title>
                            <Desc color={item.color}>{item.desc}</Desc>
                            <Button onClick={(e) => openThisLink(e,setUrl(item.slideLink))}>{item.btnName}</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <img src={arrowRight} alt='Right'/>
            </Arrow>
        </Container>
    );
};

export default EasySlider
