import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Mod', sans-serif;
  font-weight: 300 !important;
  margin: 2%;
  margin-top: 2rem;
  position: relative;

  letter-spacing: -0.1px;
  max-width: 360px;
  font-size: 1.6rem;
  line-height: 1.5;

  a {
    text-decoration: none;
    font-weight: bold;
    letter-spacing: -0.2px;

    font-weight: 500;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 0;
  }


${''/*
  p {
    margin: 3rem 0;
  } */}

`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

`

const Block = styled.div`
  margin-top: 3rem;
`

const Spacer = styled.div`
  margin-top: ${props => props.h}rem;
  width: 100%;
`

const BlockTitle = styled.h3`
  color: #a0a0a0;
  font-weight: normal;
  font-size: 1.6rem;
  margin: 0;
`

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 1.6rem;

`

const Subtitle = styled.p`
  font-weight: normal;
  line-height: 0.85;
  margin: 0;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;

`

const ContactLink = styled.a`
  color: black;

`

const BulletSpan = styled.span`
  margin-right: 0.1rem;
`


const Bullet = () => (
  <BulletSpan> ¬ </BulletSpan>
);

const Em = () => (
  <span> &mdash; </span>
);


const IndexPage = () => (
  <Container>

    <Header>
      <div>
        <Title>Hunter Caron</Title>
        <Subtitle>Design & Development</Subtitle>
      </div>
      <ContactLink href="mailto:huntercaron.design@icloud.com">Let’s Talk &rarr;</ContactLink>
    </Header>

    <Block>
      <p>I am a Toronto based designer & developer who is passionate about creating efficient and enjoyable digital experiences for everyone to enjoy.</p>
      <p>Currently available for freelance work.</p>
    </Block>

    <Spacer h="3"/>

    <Block>
      <BlockTitle>Experience</BlockTitle>
      <List>
        <li>
          <Bullet/> <a href="https://format.com/" target="_blank">Format</a> <Em/> Current
        </li>
        <li>
           <Bullet/> <a href="http://www.konradgroup.com/" target="_blank">Konrad Group</a> <Em/> 2016
        </li>
      </List>
    </Block>

    <Block>
      <BlockTitle>Social</BlockTitle>
      <List>
        <li>
          <Bullet/> <a href="https://twitter.com/huntercaron" target="_blank">Twitter</a>
        </li>
        <li>
          <Bullet/> <a href="https://www.instagram.com/hunterhcaron/" target="_blank">Instagram</a>
        </li>
        <li>
          <Bullet/> <a href="https://www.instagram.com/hunterhcaron/" target="_blank">Github</a>
        </li>

      </List>
    </Block>

  </Container>
)

export default IndexPage
