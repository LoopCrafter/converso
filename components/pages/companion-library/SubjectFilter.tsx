"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export const SubjectFilter = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSelectSubject = (value: string) => {
    setSelectedSubject(value);
    if (value === "All") {
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });

      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value,
      });
      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <Select value={selectedSubject} onValueChange={handleSelectSubject}>
      <SelectTrigger className="w-[180px] borer border-black outline-none">
        <SelectValue className=" outline-none" placeholder="Select subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="capitalize">
          All Subjects
        </SelectItem>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
