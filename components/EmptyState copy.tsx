import Image from "next/image";

export default function AdminEmptyState() {
  return (
    <div className="flex flex-col items-center text-center py-16 text-black">
      <Image
        src="/image.png"
        alt="No assignments"
        className="max-w-xs"
        width={400}
        height={300}
      />
      <h3 className="font-bold text-lg mt-4">No Assignments to Display</h3>
      <p className="text-gray-500 mb-4">You currently have no assignments. Enjoy the break!</p>
      <button className="px-4 py-2 bg-primary text-white rounded-lg">Refresh</button>
    </div>
  );
}

