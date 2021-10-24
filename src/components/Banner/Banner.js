import React from 'react'
import {
  BannerContainer,
  BannerWrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
} from './BannerStyles'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div>
      <BannerContainer>
        <BannerWrapper>
          <ImgContainer>
            <Image src={BannerImg} />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE!</Title>
            <Description>
              HIGH-TECH SOCCER FOOTWEAR WITH MANY GREAT DESIGNS AND COLOURS TO
              CHOOSE FROM.
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </BannerWrapper>
      </BannerContainer>
    </div>
  )
}

export default Banner
