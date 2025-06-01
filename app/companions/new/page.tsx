import { CompanionForm } from "@/components/pages";

const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 md:w-2/3 items-center justify-center">
      <article className="flex w-full gap-4 flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
