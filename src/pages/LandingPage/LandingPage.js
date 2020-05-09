import React from "react";
import ContactPage from "../../components/ContactPage.js/ContactPage";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppBanner from "../../components/AppBanner/AppBanner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

import "./LandingPage.css";
import MainFooter from "../../components/MainFooter/MainFooter";
import PricingPage from "../../components/Pricing/PricingPage";

export default function LandingPage() {
  return (
    <div className="Landing-Page">
      <AppHeader />
      <AppBanner />
      {/* <About /> */}
      <Services />
      <PricingPage />
      <ContactPage />

      <MainFooter />
    </div>
  );
}
