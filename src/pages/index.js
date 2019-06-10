import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useCarousel } from "../hooks/carousel-hook";
import { useGallery } from "../hooks/gallery-hook";
import seoJson from "../assets/seo.json";

function IndexPage() {
  const Carousel = useCarousel();
  const CategoryGallery = useGallery("category");

  return <Layout>
    <SEO title="Nav Technology Home" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
    <div className="home-page-container">
      <div className="carousel-container">
        {Carousel}
      </div>
      <div className="category-container">
        {CategoryGallery}
      </div>
    </div>
  </Layout>
}

export default IndexPage
