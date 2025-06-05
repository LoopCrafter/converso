import { subjectsColors } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export function formUrlQuery({
  params,
  key,
  value,
}: FormUrlQueryParams): string {
  const searchParams = new URLSearchParams(params);

  searchParams.set(key, value);

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

export function removeKeysFromUrlQuery({
  params,
  keysToRemove,
}: RemoveKeysFromUrlQueryProps): string {
  const searchParams = new URLSearchParams(params);

  keysToRemove.forEach((key) => {
    searchParams.delete(key);
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
