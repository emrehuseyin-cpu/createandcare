# Deploying `createandcare.eu` to HostGator (Step-by-Step Guide)

This guide is written for non-developers. We support **two ways** to connect GitHub to HostGator cPanel:

- **Option A (Recommended & Easiest): cPanel "Git™ Version Control"** — No FTP passwords or GitHub Secrets needed! GitHub Actions automatically builds the static website into the `dist/` folder on every edit, and cPanel pulls and copies `dist/` straight into `public_html` using `.cpanel.yml`.
- **Option B (Alternative): Automatic FTPS Upload via GitHub Secrets** — Pushes `dist/` over FTPS whenever you save a change.

---

## Step 1: Turn On Free HTTPS (AutoSSL) & Remove Placeholder in cPanel

1. Log in to your HostGator portal and click **Launch cPanel**.
2. Scroll down to **Security** → **SSL/TLS Status**, select `createandcare.eu` and `www.createandcare.eu`, and click **Run AutoSSL**.
3. Open **File Manager** → click **`public_html`** in the left sidebar → delete HostGator's default `index.html` or `default.html` welcome file if one is there.
4. *(If your domain was bought separately from your HostGator hosting plan)* Point your domain's nameservers to the two HostGator nameservers listed under **Hosting → Server Information**.

---

## Option A: Using cPanel's Built-in "Git™ Version Control" (No Secrets Needed)

Because this repository includes a `.cpanel.yml` file and GitHub Actions automatically builds and commits the ready-to-serve `dist/` folder whenever you edit a file on GitHub, connecting cPanel takes 2 minutes:

### 1. Connect the GitHub Repository in cPanel
1. In HostGator cPanel, scroll to the **Files** section and click **Git™ Version Control**.
2. Click the blue **Create** button on the right.
3. Make sure the **Clone a Repository** toggle switch is turned **ON**.
4. Fill in the three fields:
   - **Clone URL:** `https://github.com/emrehuseyin-cpu/createandcare.git`
   - **Repository Path:** Leave the default (e.g. `/home/yourusername/repositories/createandcare`) — **do NOT put `public_html` here**, because `.cpanel.yml` automatically copies the built website from this repo into `public_html`!
   - **Repository Name:** `createandcare`
5. Click **Create**.

### 2. Deploy to `public_html`
1. Once cPanel finishes cloning, click **Manage** next to `createandcare` in the **Git™ Version Control** list.
2. Click the **Pull or Deploy** tab at the top.
3. Click **Update from Remote** (to pull the latest changes from GitHub) and then click **Deploy HEAD Commit**.
   - cPanel reads `.cpanel.yml` and copies every file inside `dist/` (including `.htaccess`) directly into your live `public_html/` folder!

### 3. Optional: Make GitHub Trigger cPanel Automatically (Webhook)
If your HostGator cPanel displays a **Webhook URL** inside the **Git™ Version Control** page (or if you prefer clicking **Update from Remote → Deploy HEAD Commit** after editing):
- Copy the Webhook URL from cPanel → open your GitHub repository → **Settings → Webhooks → Add webhook** → paste the URL and save. Now every GitHub build triggers cPanel automatically!

---

## Option B: Automatic FTPS Upload via GitHub Actions Secrets

If you prefer GitHub Actions to push files automatically via FTPS without clicking "Pull or Deploy" in cPanel:

### 1. Create a Dedicated FTP Account in cPanel
1. In cPanel → **Files** → **FTP Accounts**, create an account:
   - **Log In:** `github-deploy` (full username becomes `github-deploy@createandcare.eu`)
   - **Password:** Generate a strong password and copy it.
   - **Directory:** Set to `public_html` (delete `/github-deploy` at the end so it says only `public_html`).
2. Click **Create FTP Account**, then click **Configure FTP Client** to view your **FTP Server** hostname (e.g. `gatorXXXX.hostgator.com` or `ftp.createandcare.eu`).

### 2. Add the Three Secrets to GitHub
1. In your GitHub repository (`https://github.com/emrehuseyin-cpu/createandcare`), go to **Settings → Secrets and variables → Actions**.
2. Click **New repository secret** to add:
   - `FTP_SERVER` — Your HostGator FTP hostname
   - `FTP_USERNAME` — Your full FTP username (`github-deploy@createandcare.eu`)
   - `FTP_PASSWORD` — Your FTP password

Once those 3 secrets exist, the **Build & Deploy** workflow automatically uploads `dist/` to HostGator over FTPS on every commit and every Monday morning!
