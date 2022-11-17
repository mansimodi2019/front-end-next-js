import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const Blog = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="BLOG"
        mainLink="/blog"
        lastTitle={Data?.blogData?.title}
      />

      {Data && (
        <PageDetailsComp
          title={Data?.blogData?.title}
          description={Data?.blogData?.description}
          prepTime={Data?.blogData?.prepTime}
          bakeTime={Data?.blogData?.bakeTime}
          totalTime={Data?.blogData?.totalTime}
          yieldDetails={Data?.blogData?.yieldDetails}
          img={Data?.blogData?.img}
        />
      )}
    </>
  );
};

export default Blog;
