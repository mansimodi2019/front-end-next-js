import React from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";

const Categories = () => {
  return (
    <>
      <BreadcrumbsComp mainTitle="CATEGORIES" mainLink="/categories" />

      <PageDetailsComp
        title="Categories"
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
        img="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
      />
    </>
  );
};

export default Categories;
