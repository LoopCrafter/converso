import { CompanionCard } from "@/components/shared";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <div className="home-section">
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
      </div>
    </main>
  );
};

export default Page;
