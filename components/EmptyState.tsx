export default function EmptyState() {
  return (
    <div className="flex flex-col items-center text-center py-16 text-black">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDENGi19XzqBy_GFD6QG6Tt06gkFbgqwsx2Tw1KiH9U1aljJjwKSUN5az47T0QlsvPXn2gi2EWKHuEsTqPYZURRDBK_UJrVw8LRi23rbWNB5tDtamCFvIY3VY_Bfl70m_aPJBpttMKPs1_hV4bVmow_ZWc9dvo6q1ulWuaUlWyKa0Od3iXgcuQJpScV6SL9TXC0bNQARyLHw7QXK1hzhe2dzO5e28P3v2Erpzx8i7bjmakM1NPoG4Q5uCOiDUE0_AHVjrs162wfFE"
        alt="No assignments"
        className="max-w-xs"
      />
      <h3 className="font-bold text-lg mt-4">No Assignments to Display</h3>
      <p className="text-gray-500 mb-4">You currently have no assignments. Enjoy the break!</p>
      <button className="px-4 py-2 bg-primary text-white rounded-lg">Refresh</button>
    </div>
  );
}

