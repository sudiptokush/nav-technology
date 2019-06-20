import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import category from '../assets/category.json';
import contact from '../assets/contact.json';
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
                    fixed(width:450) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }

          contact:
          allFile(filter:{sourceInstanceName: {eq:"contact"}}) {
              edges {
                node {
                  name
                  childImageSharp {
                    fixed(width:150, height:140) {
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
        const temp = data[source].edges.map((x:any, index:number) => {
          return <Img key={index} className="image" fixed= {x.node.childImageSharp.fixed}></Img>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }
      case "contact": 
      {
        const allImages = {}; 
        data[source].edges.forEach((x:any) => {
              allImages[x.node.name] = x.node.childImageSharp.fixed;
        });
        const temp = contact.map((j: any, index: number) => {
          return <div key={index} className="contact-person-tile">
              <Img fixed={allImages[j.image]}></Img>
              <div className="name">{j.name}</div>
              <div className="mobile">{j.mobile}</div>
          </div>
        });
        return <div className="contact-person-container">{temp}</div>
      }
    }
}
export { useGallery };