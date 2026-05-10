export default function SummaryMetrics() {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Open Balance Card */}
      <div className="flex flex-1 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-xs dark:border-gray-800 dark:bg-gray-dark">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-50 text-success-500 dark:bg-success-500/10 dark:text-success-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Open Balance
          </p>
          <h4 className="text-xl font-bold text-gray-800 dark:text-white/90">
            $0.00
          </h4>
        </div>
      </div>

      {/* Overdue Card */}
      <div className="flex flex-1 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-xs dark:border-gray-800 dark:bg-gray-dark">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-50 text-error-500 dark:bg-error-500/10 dark:text-error-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Overdue
          </p>
          <h4 className="text-xl font-bold text-gray-800 dark:text-white/90">
            $0.00
          </h4>
        </div>
      </div>
    </div>
  );
}
