# SolRigs V2.0 Migration Status & Deployment Guide

**Target Account:** `info@aininjas.pro`
**Project Name:** SolRigs Inc. Master Ecosystem
**Current Phase:** Migration Stage 1 Complete

---

## ✅ Stage 1: Codebase Preparation (COMPLETE)

The codebase has been prepared for a clean hand-off to the new Google Cloud/Firebase account.

*   **File Cleaned:** `services/firebaseService.ts`
*   **Action:** Old API keys and configuration strings have been removed.
*   **Status:** The file now contains placeholders (`PASTE_NEW_API_KEY_HERE`, etc.) ready for the new project credentials.
*   **Safety:** No legacy database connections remain. The app is currently running in "Offline Fallback Mode" until the new credentials are added.

---

## 📋 Stage 2: Firebase Configuration (PENDING USER ACTION)

You need to establish the backend infrastructure on your new account.

**Step-by-Step Instructions:**

1.  **Log In:**
    *   Go to [console.firebase.google.com](https://console.firebase.google.com/).
    *   Ensure you are logged in as `info@aininjas.pro`.

2.  **Create Project:**
    *   Click **"Create a project"**.
    *   Name it: `solrigs-master-v2` (or similar).
    *   Disable Google Analytics (optional, speeds up setup).
    *   Click **"Create project"**.

3.  **Register Web App:**
    *   On the project overview page, click the **Web icon** (`</>`).
    *   App nickname: `SolRigs Web`.
    *   Check the box **"Also set up Firebase Hosting"** (Select site existing or create new).
    *   Click **"Register app"**.

4.  **Get Credentials:**
    *   You will see a code block containing `const firebaseConfig = { ... }`.
    *   **Copy the values** inside that object (apiKey, authDomain, projectId, etc.).

5.  **Update Code:**
    *   Open `services/firebaseService.ts` in your code editor.
    *   Replace the placeholder values with the real keys you just copied.

6.  **Initialize Firestore:**
    *   In the Firebase Console, go to **Build > Firestore Database**.
    *   Click **"Create database"**.
    *   Select location (e.g., `nam5 (us-central)`).
    *   Choose **"Start in production mode"**.

---

## 🚀 Stage 3: Deployment (NEXT STEP)

Once Stage 2 is done, deploy the live application.

**Terminal Commands:**

```bash
# 1. Install Firebase Tools (if not already installed)
npm install -g firebase-tools

# 2. Login to the new account
firebase login
# (Select info@aininjas.pro in the browser popup)

# 3. Initialize the project link
firebase init
# - Select 'Hosting' and 'Firestore'.
# - Select 'Use an existing project' -> choose 'solrigs-master-v2'.
# - What file to use for Firestore Rules? -> Press Enter (default: firestore.rules).
# - What directory to use as public root? -> Type '.' (current directory) or 'dist' if building React. 
#   *NOTE based on your index.html structure:* You are likely deploying the root.
# - Configure as a single-page app? -> Yes.
# - Overwrite index.html? -> NO.

# 4. Deploy
firebase deploy
```

---

## 🧪 Stage 4: Verification Checklist

After deployment, perform these tests to confirm the migration is successful:

1.  [ ] **Load Site:** Visit the hosted Firebase URL (e.g., `https://solrigs-master-v2.web.app`).
2.  [ ] **Check Telemetry:** Go to the Dashboard or Home page.
    *   *Success:* You should see live metric cards.
    *   *Note:* Initially, they might show fallback data until you manually add a document to the `rwa_metrics` collection in Firestore.
3.  [ ] **Test Presales Form:**
    *   Go to `/presales`.
    *   Submit a dummy lead.
    *   Check the Firebase Console > Firestore > `leads` collection.
    *   *Success:* The new document appears immediately.

---

## 🔮 Future Roadmap (Post-Migration)

*   **Domain Connection:** Connect `solrigs.com` via Firebase Hosting settings.
*   **Authentication:** Enable Firebase Auth if you plan to add a login for Michael Tran.
*   **Gemini API Key:** Ensure the `API_KEY` for Google GenAI is set in your environment variables or deployment secrets for the AI Mentor to work live.
