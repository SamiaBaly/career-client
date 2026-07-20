import SettingsSection from "@/app/components/dashboard/SettingsSection";

export default function SettingsPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        p-6
      "
    >
      <div className="mb-8">
        <h1
          className="
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          Settings
        </h1>

        <p
          className="
            mt-2
            text-gray-500
            dark:text-gray-400
          "
        >
          Manage your account preferences and application settings.
        </p>
      </div>

      <SettingsSection />
    </div>
  );
}