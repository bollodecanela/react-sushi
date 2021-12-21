import React from "react";
import ContentLoader from "react-content-loader";

function CatalogItemLoad() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={397}
      viewBox="0 0 300 397"
      backgroundColor="#f9e7d9"
      foregroundColor="#e8d8ca"
    >
      <rect x="15" y="0" rx="10" ry="10" width="270" height="239" />
      <rect x="15" y="250" rx="10" ry="10" width="270" height="70" />
      <rect x="15" y="330" rx="10" ry="10" width="100" height="40" />
      <rect x="185" y="330" rx="10" ry="10" width="100" height="40" />
    </ContentLoader>
  );
}

export default CatalogItemLoad;
