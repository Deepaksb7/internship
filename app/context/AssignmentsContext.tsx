"use client";
import { Assignment, } from '@/types/assignment';
import { loadAssignments, saveAssignments } from '@/utils/Storage';
import React, { createContext, useContext, useEffect } from 'react'

interface AssignmentsContextType {
    assignments: Assignment[];
    addAssignment: (assignment: Assignment) => void;
    // deleteAssignment: (id: string) => void;
}
const AssignmentsContext = createContext<AssignmentsContextType | undefined>(undefined);

export const AssignmentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [assignments, setAssignments] = React.useState<Assignment[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setAssignments(loadAssignments());
        }
    }, []);
    
    const addAssignment = (assignment: Assignment) => {
        setAssignments(prev => {
            const newAssignments = [...prev, assignment];
            saveAssignments(newAssignments);
          
            return newAssignments;
        });
    };

    // const deleteAssignment = (id: string) => {
    //     setAssignments(prev => {
    //         const newAssignments = prev.filter(a => a.id !== id);
    //         saveAssignments(newAssignments);
    //         return newAssignments;
    //     });
    // };
    return (
        <AssignmentsContext.Provider value={{ assignments, addAssignment }}>
            {children}
        </AssignmentsContext.Provider>
    )


}

export function useAssignments() {
    const context = useContext(AssignmentsContext);
    if (!context) {
        throw new Error("useAssignments must be used within an AssignmentsProvider");
    }
    return context;
}
