import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { theme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailDigest: false,
    darkMode: true,
    privateProfile: false,
    twoFactor: false,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your account preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="max-w-2xl space-y-6">
        {/* Notifications */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Notifications
          </h3>

          <div className="space-y-4">
            {[
              {
                key: "notifications",
                label: "Enable Notifications",
                description: "Receive alerts for important events",
              },
              {
                key: "emailDigest",
                label: "Email Digest",
                description: "Weekly summary of activities",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                    settings[item.key]
                      ? "bg-blue-600"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings[item.key] ? "translate-x-5" : "translate-x-1"
                    } mt-0.5`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Privacy
          </h3>

          <div className="space-y-4">
            {[
              {
                key: "privateProfile",
                label: "Private Profile",
                description: "Hide your profile from public view",
              },
              {
                key: "twoFactor",
                label: "Two-Factor Authentication",
                description: "Extra security for your account",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                    settings[item.key]
                      ? "bg-blue-600"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings[item.key] ? "translate-x-5" : "translate-x-1"
                    } mt-0.5`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Appearance
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Dark Mode
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Use dark theme interface
              </p>
            </div>
            <button
              onClick={() => handleToggle("darkMode")}
              className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                settings.darkMode
                  ? "bg-blue-600"
                  : "bg-slate-300 dark:bg-slate-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? "translate-x-5" : "translate-x-1"
                } mt-0.5`}
              />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-400 mb-4">
            Danger Zone
          </h3>

          <button className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
