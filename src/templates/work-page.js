import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Container = styled.div`
  font-family: 'Mod', sans-serif;
  position: relative;

  @media (min-width: 600px) {

	}
`

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;

  margin-top: 3rem;

`

const SubTitle = styled.p`
  font-weight: normal;
  margin: 0;
  line-height: 0.8;

  @media (min-width: 600px) {
    line-height: 1.2;
  }
`

const BackButton = styled.div`
  position: absolute;
  line-height: 1.5;
  top: 3rem;
  font-weight: 500;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }


  left: -75px;
`

const Content = styled.div`
  max-width: 500px;
`

export default ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Container>
      <BackButton>
        <Link to="/">&larr; Back</Link>
      </BackButton>

      <div>
          <Title>{frontmatter.title}</Title>
          <SubTitle>{frontmatter.subtitle}</SubTitle>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
      </div>

    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
      }
    }
  }
`;