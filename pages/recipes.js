import React from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";

const RecipesPage = () => {
  return (
    <>
      <BreadcrumbsComp mainTitle="RECIPES" mainLink="/" />

      <PageDetailsComp
        title="Whole-Grain Banana Bread"
        description="This one-bow! banana bread — our 2018 Recipe of the Year — uses
                the simplest ingredients, but is incredibly moist and flavorful.
                While the recipe calls for a 50/50 mix of flours (all-purpose
                and whole wheat), we often make the bread 100% whole wheat, and
                honestly? No one can tell, it's that good! And not only is this
                bread delicious — it's versatile."
        prepTime="10min"
        bakeTime="1hr to 1h 15mins"
        totalTime="1hr 10 mins"
        yieldDetails="1 loaf, 12 generous servings"
        img="https://tinyjpg.com/images/social/website.jpg"
      />
    </>
  );
};

export default RecipesPage;
