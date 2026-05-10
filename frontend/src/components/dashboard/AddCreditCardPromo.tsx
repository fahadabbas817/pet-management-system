import { Link } from "react-router";

export default function AddCreditCardPromo() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-gray-dark flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors dark:hover:bg-white/[0.03]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
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
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-800 dark:text-white/90">
            Add Credit Card Details
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Auto-pay is the easiest way to pay for services. We will send you a
            copy of each invoice via email and you will not have to remember
            when to pay it manually.
          </p>
        </div>
      </div>
      <Link
        to="/billing/payment-methods"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-brand-500"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
