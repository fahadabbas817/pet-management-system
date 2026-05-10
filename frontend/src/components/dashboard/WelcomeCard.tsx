import { useAuth } from "../../context/AuthContext";

export default function WelcomeCard() {
  const { user } = useAuth();
  const displayName = user?.email?.split("@")[0] || "User";

  return (
    <div className="rounded-2xl border border-gray-200 bg-brand-50/50 p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white/90">
        Welcome {displayName}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Client portal allows you to manage your contact info as well as details
        about your location, yard, dogs, schedule, billing and notification
        preferences. You may also add multiple credit cards or request
        subscription changes.
      </p>
    </div>
  );
}
