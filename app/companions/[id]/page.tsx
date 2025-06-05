import CompanionComponent from "@/components/shared/CompanionComponent";
import { getCompanionById } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

interface CompanionSessionProps {
  params: Promise<{ id: string }>;
}

const Companion = async ({ params }: CompanionSessionProps) => {
  const { id } = await params;
  const companion = await getCompanionById(id);
  if (!companion) {
    redirect("/companions");
  }
  const user = await currentUser();
  const { name, topic, subject, duration } = companion;
  return (
    <main>
      <article className="flex justify-between items-center rounded-border p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size-[72px] flex justify-center items-center rounded-lg max-md:hidden"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={subject}
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">{name}</p>
              <div className="subject-badge max-sm:hidden">{subject}</div>
            </div>
            <p className="text-lg">Topic: {topic}</p>
          </div>
        </div>
        <p className="items-start text-2xl max-md:hidden">{duration} minutes</p>
      </article>
      <CompanionComponent
        {...companion}
        companionId={id}
        userName={user?.firstName}
        userImage={user?.imageUrl}
      />
    </main>
  );
};

export default Companion;
