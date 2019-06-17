import React from "react";
import Layout from "../components/layout";
import { useGallery } from "../hooks/gallery-hook";

const Gallery = () => {
  const AlbumGallery = useGallery("album");
  return <Layout>
    <div className="album-container">
      {AlbumGallery}
    </div>
  </Layout>
}

export default Gallery