"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmptyState() {
  const router = useRouter();

  const handleAddAssignment = () => {
    router.push("/AdminPage/form");
  };

  return (
    <div className="flex flex-col items-center text-center py-16 text-black">
      <Image
        src="/image.png"
        alt="No assignments"
        className="max-w-xs"
        width={400}
        height={300}
        loading="eager"
      />
      <h3 className="font-bold text-lg mt-4">No Assignments Found</h3>
      <p className="text-gray-500 mb-4">It looks like there are no assignments at the moment. Let&apos;s create one!</p>
      <button
        onClick={handleAddAssignment}
        className="px-6 py-3 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90"
      >
        Add New Assignment
      </button>
    </div>
  );
}
