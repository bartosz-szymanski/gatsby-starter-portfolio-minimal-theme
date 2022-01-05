import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="MS TRANSLATIONS Milena Starzec" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="O mnie" />
        <InterestsSection sectionId="details" heading="Szczegóły" />
        <ProjectsSection sectionId="features" heading="Usługi" />
        <ContactSection sectionId="github" heading="Inne" />
      </Page>
    </>
  );
}
