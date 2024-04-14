import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategory = () => (
  <div className="mr-[20px]">
    <ContentLoader
      speed={2}
      width={200}
      height={200}
      viewBox="0 0 200 230"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="35" y="382" rx="0" ry="0" width="1" height="0" />
      <rect x="28" y="6" rx="100" ry="100" width="151" height="151" />
      <rect x="157" y="189" rx="0" ry="0" width="1" height="0" />
      <rect x="38" y="170" rx="0" ry="0" width="140" height="37" />
      <rect x="145" y="188" rx="0" ry="0" width="2" height="0" />
    </ContentLoader>
  </div>
);

export default SkeletonCategory;
