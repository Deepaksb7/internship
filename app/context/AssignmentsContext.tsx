"use client";
import { Assignment, } from '@/types/assignment';
import { loadAssignments, saveAssignments } from '@/utils/Storage';
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AssignmentsContextType {
    assignments: Assignment[];
    addAssignment: (assignment: Assignment) => void;
    deleteAssignment: (id: string) => void;
}
const AssignmentsContext = createContext<AssignmentsContextType | undefined>(undefined);

export const AssignmentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            if (typeof window !== "undefined") {
                const loadedAssignments =loadAssignments();
                setAssignments(loadedAssignments); 
            }
        };

        fetchAssignments(); 
    }, []);

    const addAssignment = (assignment: Assignment) => {

        const currentAssignmentsFromStorage = loadAssignments(); 
        const newAssignments = [...currentAssignmentsFromStorage, assignment];

        saveAssignments(newAssignments); 
        setAssignments(newAssignments); 
    };

    const deleteAssignment = (id: string) => {
        setAssignments(prevAssignments => {
            const newAssignments = prevAssignments.filter(a => a.id !== id);
            saveAssignments(newAssignments); 
            return newAssignments; 
        });
    };

    return (
        <AssignmentsContext.Provider value={{ assignments, addAssignment, deleteAssignment }}>
            {children}
        </AssignmentsContext.Provider>
    );
};

export function useAssignments() {
    const context = useContext(AssignmentsContext);
    if (!context) {
        throw new Error("useAssignments must be used within an AssignmentsProvider");
    }
    return context;
}
