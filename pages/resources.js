import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const Resources = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp mainTitle="RECIPES" mainLink="/" lastTitle="RESOURCES" />

      {Data && (
        <PageDetailsComp
          title={Data?.resourcesData?.title}
          description={Data?.resourcesData?.description}
          prepTime={Data?.resourcesData?.prepTime}
          bakeTime={Data?.resourcesData?.bakeTime}
          totalTime={Data?.resourcesData?.totalTime}
          yieldDetails={Data?.resourcesData?.yieldDetails}
          img={Data?.resourcesData?.img}
        />
      )}
    </>
  );
};

export default Resources;
