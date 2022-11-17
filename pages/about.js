import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const About = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="ABOUT"
        mainLink="/about"
        lastTitle={Data?.aboutData?.title}
      />

      {Data && (
        <PageDetailsComp
          title={Data?.aboutData?.title}
          description={Data?.aboutData?.description}
          prepTime={Data?.aboutData?.prepTime}
          bakeTime={Data?.aboutData?.bakeTime}
          totalTime={Data?.aboutData?.totalTime}
          yieldDetails={Data?.aboutData?.yieldDetails}
          img={Data?.aboutData?.img}
        />
      )}
    </>
  );
};

export default About;
