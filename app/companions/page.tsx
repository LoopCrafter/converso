import { SearchInput, SubjectFilter } from "@/components/pages";
import { CompanionCard } from "@/components/shared";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibraryPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters?.subject ?? "";
  const topic = filters?.topic ?? "";
  const page = Number(filters?.page ?? 1);

  const companions = await getAllCompanions({ subject, topic, page });

  return (
    <main>
      <div className="flex justify-between items-center gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </div>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibraryPage;
