import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const RecipesPage = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="RECIPES"
        mainLink="/recipes"
        lastTitle={Data?.recepiesData?.title}
      />

      {Data && (
        <PageDetailsComp
          title={Data?.recepiesData?.title}
          description={Data?.recepiesData?.description}
          prepTime={Data?.recepiesData?.prepTime}
          bakeTime={Data?.recepiesData?.bakeTime}
          totalTime={Data?.recepiesData?.totalTime}
          yieldDetails={Data?.recepiesData?.yieldDetails}
          img={Data?.recepiesData?.img}
        />
      )}
    </>
  );
};

export default RecipesPage;
