import React from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";

const Collections = () => {
  return (
    <>
      <BreadcrumbsComp mainTitle="COLLECTIONS" mainLink="/collections" />

      <PageDetailsComp
        title="Collections"
        description="This one-bow! banana bread — our 2018 Recipe of the Year — uses
    the simplest ingredients, but is incredibly moist and flavorful.
    While the recipe calls for a 50/50 mix of flours (all-purpose
    and whole wheat), we often make the bread 100% whole wheat, and
    honestly? No one can tell, it's that good! And not only is this
    bread delicious — it's versatile."
        prepTime="22min"
        bakeTime="6hr to 7h 15mins"
        totalTime="10hr 10 mins"
        yieldDetails="8 loaf, 36 generous servings"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt584rMTJ8Yqb6UxgqiV130sgnmDVEMSp8Bw&usqp=CAU"
      />
    </>
  );
};

export default Collections;
