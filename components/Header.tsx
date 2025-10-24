export default function Header() {
  return (
    <header className="border-b border-gray-300  px-6 py-3 flex items-center justify-between text-black mx-90">
      <div className="flex items-center gap-3">
        <div className="text-primary">
          <svg fill="currentColor" viewBox="0 0 48 48" className="size-6">
            <path d="M12.08 24L4 19.25l5.96-10.5 8.08 4.74V4h12v9.5l8.08-4.74L44 19.25 35.92 24 44 28.75l-5.96 10.5-8.08-4.74V44h-12v-9.5l-8.08 4.74L4 28.75 12.08 24Z" />
          </svg>
        </div>
        <h2 className="font-bold text-lg">Student-Assignment Management System</h2>
      </div>

      <div className="flex items-center gap-4">

        <div
          className="size-10 rounded-full bg-cover"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3rB7EQBtPsUylqIigRtKUg0AcSFlAzHxiFlnZVR0t91FGwlg4XbxObPxBOAiBEIdAPx-QAysWt_cApNHmMB6hgfp9Lk8Y5BdU0gtN8tcaqVsz4GMimKEdrx-07QWR8iSGEfXEZOixFEcCdLVX6Fkvb07lMoRh48Jgc38YARbtoo8CgKszgmbVBWI91Rhz6846hWPiz2xzazsx5Mazdnnu3Y6q7B0y3Fs3NcKMkqbN81aZL4LFdubh8uKS0R6S8xtODLc9WxFXbho')",
          }}
        />
      </div>
    </header>
  );
}

