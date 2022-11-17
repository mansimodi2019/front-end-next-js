import React, { useContext } from "react";
import BreadcrumbsComp from "../Components/BreadcrumbsComp";
import PageDetailsComp from "../Components/PageDetailsComp";
import Context from "../Context";

const LearnPage = () => {
  const Data = useContext(Context);

  return (
    <>
      <BreadcrumbsComp
        mainTitle="LEARN"
        mainLink="/learn"
        lastTitle={Data?.learnData?.title}
      />

      {Data && (
        <PageDetailsComp
          title={Data?.learnData?.title}
          description={Data?.learnData?.description}
          prepTime={Data?.learnData?.prepTime}
          bakeTime={Data?.learnData?.bakeTime}
          totalTime={Data?.learnData?.totalTime}
          yieldDetails={Data?.learnData?.yieldDetails}
          img={Data?.learnData?.img}
        />
      )}
    </>
  );
};

export default LearnPage;
