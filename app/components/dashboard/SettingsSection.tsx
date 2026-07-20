"use client";

import {
  User,
  Mail,
  Shield,
  Moon,
  Bell,
  Trash2,
  ChevronRight,
} from "lucide-react";

const settings = [
  {
    title: "Profile Information",
    description: "Update your personal information.",
    icon: User,
  },
  {
    title: "Email Preferences",
    description: "Manage your email address and notifications.",
    icon: Mail,
  },
  {
    title: "Security",
    description: "Change password and secure your account.",
    icon: Shield,
  },
  {
    title: "Appearance",
    description: "Switch between light and dark mode.",
    icon: Moon,
  },
  {
    title: "Notifications",
    description: "Choose which notifications you receive.",
    icon: Bell,
  },
];

export default function SettingsSection() {
  return (
    <div className="space-y-6">
      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          dark:bg-gray-900
          dark:border-gray-800
          overflow-hidden
        "
      >
        {settings.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-6
                py-5
                text-left
                transition
                hover:bg-gray-50
                dark:hover:bg-gray-800
                ${index !== settings.length - 1
                  ? "border-b border-gray-200 dark:border-gray-800"
                  : ""
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    rounded-xl
                    bg-gray-100
                    p-3
                    dark:bg-gray-800
                  "
                >
                  <Icon
                    size={20}
                    className="
                      text-gray-700
                      dark:text-gray-300
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      font-semibold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={20}
                className="
                  text-gray-400
                "
              />
            </button>
          );
        })}
      </div>

      <div
        className="
          rounded-2xl
          border
          border-red-200
          bg-white
          p-6
          dark:bg-gray-900
          dark:border-red-900
        "
      >
        <div className="flex items-center gap-3">
          <Trash2 className="text-red-500" size={22} />

          <div>
            <h3
              className="
                font-semibold
                text-red-600
              "
            >
              Delete Account
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Permanently delete your account and all associated data.
            </p>
          </div>
        </div>

        <button
          className="
            mt-5
            rounded-xl
            bg-red-600
            px-5
            py-2.5
            text-white
            transition
            hover:bg-red-700
          "
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}