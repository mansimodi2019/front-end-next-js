import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const Shop = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="SHOP"
        mainLink="/shop"
        lastTitle={Data?.shopData?.title}
      />

      {Data && (
        <PageDetailsComp
          title={Data?.shopData?.title}
          description={Data?.shopData?.description}
          prepTime={Data?.shopData?.prepTime}
          bakeTime={Data?.shopData?.bakeTime}
          totalTime={Data?.shopData?.totalTime}
          yieldDetails={Data?.shopData?.yieldDetails}
          img={Data?.shopData?.img}
        />
      )}
    </>
  );
};

export default Shop;
