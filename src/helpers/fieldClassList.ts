import { Ref } from "vue";

export const fieldClassList = (isFieldValid: Ref<boolean>) => {
  const baseClasses: string[] = [
    "mt-1",
    "focus:ring-gray-500 focus:border-gray-500",
    "text-gray-800 dark:text-gray-200",
    "bg-white dark:bg-gray-700",
    "block",
    "w-full",
    "shadow-sm",
    "sm:text-sm",
    "rounded-md",
  ];

  let borderClass = "";
  if (!isFieldValid.value) {
    borderClass = "border-red-400";
  } else {
    borderClass = "border-gray-600";
  }
  return [...baseClasses, borderClass];
};
