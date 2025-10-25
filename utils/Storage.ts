import { Assignment } from "@/types/assignment";

export const loadAssignments = (): Assignment[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("assignments");
    return stored ? JSON.parse(stored) : [];
} catch (error) {
    console.error("Error loading assignments:", error);
    return [];
  }
};

export const saveAssignments = (assignments: Assignment[]) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  } catch (error) {
    console.error("Error saving assignments:", error);
  }
};
