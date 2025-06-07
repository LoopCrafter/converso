import { CompanionForm } from "@/components/pages";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const canCreateCompanion = await newCompanionPermissions();
  return (
    <main className="min-lg:w-1/3 md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="flex w-full gap-4 flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit  md:w-full">
          <Image
            src="/images/limit.svg"
            alt="Companion Limit Reached"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade Your Plan</div>
          <h2>You’ve Reached Your Limit</h2>
          <p>
            You’ve reached your companion limit. Upgrade to create more
            companions and premium features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center items-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
