import { Link } from "react-router";
import { UserCircleIcon, TableIcon, CalenderIcon, PageIcon, BoxCubeIcon, PlugInIcon } from "../../icons";

const quickLinks = [
  {
    title: "Dog Info",
    subtitle: "Manage dog info",
    path: "/profile/dog",
    icon: <UserCircleIcon />,
  },
  {
    title: "Subscriptions",
    subtitle: "Manage subscriptions",
    path: "/billing/subscriptions",
    icon: <TableIcon />,
  },
  {
    title: "Invoices",
    subtitle: "Manage your invoices",
    path: "/billing/invoices",
    icon: <PageIcon />,
  },
  {
    title: "Cleanups",
    subtitle: "Manage your cleanups",
    path: "/cleanup",
    icon: <CalenderIcon />,
  },
  {
    title: "Payment Methods",
    subtitle: "Manage payment methods",
    path: "/billing/payment-methods",
    icon: <BoxCubeIcon />,
  },
  {
    title: "Notification Settings",
    subtitle: "Manage your notifications",
    path: "/settings/notification",
    icon: <PlugInIcon />,
  },
];

export default function QuickLinks() {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white/90">
        Quick Links
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-xs transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-dark dark:hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
                {link.icon}
              </div>
              <div>
                <h4 className="text-md font-bold text-gray-800 dark:text-white/90">
                  {link.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {link.subtitle}
                </p>
              </div>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-brand-500">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
