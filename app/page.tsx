import { CTA } from "@/components/pages";
import { CompanionCard, CompanionsList } from "@/components/shared";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id={123}
          subject="Science"
          topic="Neural Network of the Brain"
          name="Neura the Brainy Explorer"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id={435}
          subject="Maths"
          topic="Derivatives & Integrals"
          name="Countsy the Number Wizard"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id={789}
          subject="Language"
          topic="English Literature"
          name="Verba the Vocabulary Builder"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed lessons"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
