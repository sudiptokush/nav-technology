import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

function imageProcessor(source: string, type: string) {
  const gql = graphql`{
    logo: 
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
}`;

    const data = useStaticQuery(gql);
  
  return type == "fluid" ? 
    <Img key={source} fluid={data[source].childImageSharp.fluid}></Img> : 
    <Img key={source} fixed={data[source].childImageSharp.fixed}></Img> 
}

export {imageProcessor};