import React from "react";
import Abouthero from "../../components/Aboutcomponents/Abouthero";
import FeaturesSection from "../../components/Aboutcomponents/FeaturesSection ";
import AwardSection from "../../components/Aboutcomponents/AwardSection";
import MarketingStatsSection from "../../components/Aboutcomponents/MarketingStatsSection";

const AboutUsPage = () => {
  return (
    <>
      <Abouthero />
      <FeaturesSection />
      <AwardSection />
      <MarketingStatsSection />
    </>
  );
};

export default AboutUsPage;
