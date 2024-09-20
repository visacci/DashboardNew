// src/utils/webUsageStats.js

// Function to return statistics for mobile and desktop OS usage as an array
export const mobileAndDesktopOS =
  // Example data structured as an array of objects
  [
    { id: "mobile", value: 65, label: "Mobile" }, // Mobile users percentage
    { id: "desktop", value: 35, label: "Desktop" }, // Desktop users percentage
  ];

// Function to format values into percentage strings
export const valueFormatter = (value) => {
  return `${value}%`;
};
