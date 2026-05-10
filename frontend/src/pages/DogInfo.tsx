import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

export default function DogInfo() {
  return (
    <>
      <PageMeta title="Dog Info | Dashboard" description="Dog Info page" />
      <PageBreadcrumb pageTitle="Dog Info" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
          Dog Info
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is a placeholder for Dog Info.
        </p>
      </div>
    </>
  );
}
