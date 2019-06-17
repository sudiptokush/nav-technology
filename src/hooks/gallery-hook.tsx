import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import category from '../assets/category.json';
import {navigate} from "gatsby";

function useGallery(source: string) {
    const gql = graphql`{
        category:
        allFile(filter:{sourceInstanceName: {eq:"category"}}) {
            edges {
              node {
                name
                childImageSharp {
                  fixed(height:150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }

          album:
          allFile(filter:{sourceInstanceName: {eq:"album"}}) {
              edges {
                node {
                  name
                  childImageSharp {
                    fixed(height:350) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
        }`;

    const data = useStaticQuery(gql);

    switch(source) {
      case "category":
      {
        const allImages = {}; 
        data[source].edges.forEach((x:any) => {
              allImages[x.node.name] = x.node.childImageSharp.fixed;
        });
        const temp = category.map((j: any, index: number) => {
          return <div key={index} className="category">
              <Img fixed={allImages[j.image]}></Img>
              <div className="name">{j.name}</div>
          </div>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }
      case "album":
      {
        const temp = data[source].edges.map((x:any) => {
          return <Img className="image" fixed= {x.node.childImageSharp.fixed}></Img>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }
    }
}
export { useGallery };