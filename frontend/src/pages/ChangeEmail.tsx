import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

export default function ChangeEmail() {
  return (
    <>
      <PageMeta title="Change Email | Dashboard" description="Change Email page" />
      <PageBreadcrumb pageTitle="Change Email" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
          Change Email
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is a placeholder for Change Email.
        </p>
      </div>
    </>
  );
}
