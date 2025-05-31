import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cts-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build a Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <Button className="btn-primary w-full text-center flex justify-center items-center">
        <Plus />
        <Link href="companion/new">Build New Companion</Link>
      </Button>
    </section>
  );
};
