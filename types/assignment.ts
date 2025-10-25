export type AssignmentStatus = "Not Started" | "In Progress" | "Submitted" | "Graded" | "Overdue";

export interface Assignment {
  id: string;
  title: string;
  course: string;
  time: string;
  dueDate: string;
  status?: AssignmentStatus;
}


export interface Submission {
  name: string;
  submitted: boolean;
  submissionDate?: string;
  grade: string;
  link: string;
}

export interface Assignments {
  title: string;
  course: string;
  dueDate: string;
  score: number;
  maxScore: number;
  late?: boolean;
  actionLabel: string;
  actionLink: string;
  submissions: Submission[]; 
}





