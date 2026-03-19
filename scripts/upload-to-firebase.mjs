/**
 * Upload questions-export.json to Firebase Realtime Database.
 * Run with:  npm run db:upload
 *
 * Prerequisites:
 *   1. Run `npm run db:export` first to generate questions-export.json
 *   2. You must be logged in to Firebase CLI (`firebase login`)
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exportFile = path.resolve(__dirname, "../questions-export.json");

if (!existsSync(exportFile)) {
  console.error("✗ questions-export.json not found. Run `npm run db:export` first.");
  process.exit(1);
}

console.log("↑ Uploading to Firebase Realtime Database...");

try {
  execSync(
    `firebase database:set /questionBank "${exportFile}" --force`,
    { stdio: "inherit" }
  );
  console.log("✓ Upload complete!");
  console.log("  View at: https://console.firebase.google.com/project/taxi-license-2c6b0/database/taxi-license-2c6b0-default-rtdb/data/questionBank");
} catch {
  console.error("✗ Upload failed. Make sure you are logged in: firebase login");
  process.exit(1);
}
