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
        {/*<ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />*/}
        <AboutSection sectionId="about" heading="O mnie" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
