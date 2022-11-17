import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const Collections = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="RECIPES"
        mainLink="/"
        lastTitle="COLLECTIONS"
      />

      {Data && (
        <PageDetailsComp
          title={Data?.collectionsData?.title}
          description={Data?.collectionsData?.description}
          prepTime={Data?.collectionsData?.prepTime}
          bakeTime={Data?.collectionsData?.bakeTime}
          totalTime={Data?.collectionsData?.totalTime}
          yieldDetails={Data?.collectionsData?.yieldDetails}
          img={Data?.collectionsData?.img}
        />
      )}
    </>
  );
};

export default Collections;
