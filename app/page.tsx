import { CTA } from "@/components/pages";
import { CompanionCard, CompanionsList } from "@/components/shared";
import {
  getAllCompanions,
  getRecentSession,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const HomePage = async () => {
  const { userId } = await auth();
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSession(10);
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => {
          return (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          );
        })}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed lessons"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default HomePage;
