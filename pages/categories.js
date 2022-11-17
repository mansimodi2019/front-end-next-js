import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const Categories = () => {
  const Data = useContext(Context);
  return (
    <>
      <BreadcrumbsComp
        mainTitle="RECIPES"
        mainLink="/"
        lastTitle="CATEGORIES"
      />

      {Data && (
        <PageDetailsComp
          title={Data?.categoriesData?.title}
          description={Data?.categoriesData?.description}
          prepTime={Data?.categoriesData?.prepTime}
          bakeTime={Data?.categoriesData?.bakeTime}
          totalTime={Data?.categoriesData?.totalTime}
          yieldDetails={Data?.categoriesData?.yieldDetails}
          img={Data?.categoriesData?.img}
        />
      )}
    </>
  );
};

export default Categories;
