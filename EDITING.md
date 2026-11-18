# Editing Guide for Partner Staff (`createandcare.eu`)

Welcome! This guide is written for staff at **Integrational e.V.**, **Associação Ramifica**, and **Modern Gelişim Derneği**.

You do **not** need to install any software on your computer. You can add news posts, upload workshop photos, update the top announcement bar, and add events directly in your web browser on **GitHub.com**. Every time you save (**Commit**) a change to `main`, the website builds and updates itself on `https://createandcare.eu` in about **2 minutes**.

---

## 1. The Golden Rule: Photo Consent (`consent: true`)

Because **CREATE & CARE** is a project about mental well-being and inclusion, protecting participant privacy comes first:

1. **Never upload a photo showing identifiable people (or personal workshop artworks) unless you have their signed written consent form on file.**
2. Whenever you attach an `image` to a news post or event, you **must** write `consent: true` in the top settings block (called "frontmatter").
3. **Automatic safety net:** If you include an `image` in a post and forget to set `consent: true` (or leave `consent: false`), the website build will automatically **turn red and stop** so an unconsented photo can never be published by mistake.

---

## 2. How to Add a News Post (With or Without a Photo)

### Step A — Upload your photo first (if your post has a photo)

If your news post does not have a photo, skip straight to **Step B**.

1. Log in to GitHub and open the repository.
2. Click through the folders: **`src`** → **`assets`** → **`news`**.
3. In the top-right corner above the file list, click the **Add file** button and choose **Upload files**.
4. Drag your photo from your computer onto the page.
   - *Tip:* Name your photo clearly in lowercase letters with hyphens and no spaces, for example: `madeira-workshop-circle.jpg`.
5. Scroll down to the bottom, leave **"Commit directly to the `main` branch"** selected, and click the green **Commit changes** button.

### Step B — Create the news post Markdown file

1. Navigate to the folder: **`src`** → **`content`** → **`news`**.
2. In the top-right corner, click **Add file** → **Create new file**.
3. In the **Name your file...** box at the top, type a short URL-friendly name ending in `.md` (lowercase letters and hyphens only, no spaces or special accents):
   - Example: `bonn-local-workshop-january-2027.md`
4. Copy and paste one of the two templates below into the big text editor box:

#### Template 1: News post WITHOUT a photo
```markdown
---
title: "Local workshop in Bonn brings 20 adults together"
date: 2027-01-19
city: "Bonn, Germany"
summary: "Twenty adults spent a creative day drawing postcards and sharing stories at Integrational e.V."
consent: false
---

Write your full news article here! You can write normal paragraphs separated by a blank line.

## You can add a subheading with two hashes

- And bullet points with a hyphen
- Like this!
```

#### Template 2: News post WITH a consented photo
```markdown
---
title: "Local workshop in Bonn brings 20 adults together"
date: 2027-01-19
city: "Bonn, Germany"
summary: "Twenty adults spent a creative day drawing postcards and sharing stories at Integrational e.V."
image: "../../assets/news/madeira-workshop-circle.jpg"
imageAlt: "Group of adult educators sitting in a circle sketching on pastel postcards"
consent: true
---

Write your full news article here!
```

5. Click the green **Commit changes...** button in the top-right corner, then click **Commit changes** in the popup window.
6. Done! Wait about 2 minutes and refresh `https://createandcare.eu/news/`.

---

## 3. How to Change the Top Notice Bar

The dark plum announcement bar at the very top of every page comes from a single file: **`src/content/site/notice.md`**.

1. On GitHub, click **`src`** → **`content`** → **`site`** → **`notice.md`**.
2. Click the **pencil icon** ("Edit this file") in the top-right corner of the file box.
3. Update the text inside the quotation marks:
   ```yaml
   ---
   text: "Happening now: Local workshops in Bonn, Madeira and Eskişehir, 18–20 January 2027"
   linkText: "Save your place"
   linkHref: "/#cities"
   active: true
   ---
   ```
   - *Tip:* If you want to hide the notice bar completely for a while, change `active: true` to `active: false`.
4. Click **Commit changes...** → **Commit changes**.

---

## 4. How to Add or Update an Event

Events live in **`src/content/events/`**.

1. Open **`src`** → **`content`** → **`events`**.
2. To edit an existing event, click the file and click the **pencil icon**.
3. To add a new event, click **Add file** → **Create new file**, name it something like `multicultural-online-hub-feb-2027.md`, and paste:
   ```markdown
   ---
   title: "Multicultural Online Hub: Bonn · Madeira · Eskişehir"
   date: 2027-02-10
   city: "Online (3 countries)"
   summary: "Participants from all three local workshops meet online to share creative works and stories."
   consent: false
   ---

   Full event description, schedule and how to join go here.
   ```
4. Click **Commit changes...** → **Commit changes**.

---

## 5. How to Publish a Download File (Methods Manual, Campaign Pack, Templates)

When a PDF or ZIP file is ready to publish (for example, the Methods Manual in April 2027):

1. Upload your PDF/ZIP file into the **`public/downloads/`** folder on GitHub (create the `downloads` folder inside `public/` by naming a file `downloads/methods-manual-en.pdf`).
2. Open **`src/pages/downloads/index.astro`** and click the **pencil icon**.
3. Find the item in the `downloads` list at the top of the file:
   - Change `status: 'Coming April 2027'` to `status: 'Available now (PDF, 4.2 MB)'`.
   - Change `fileUrl: null` to `fileUrl: '/downloads/methods-manual-en.pdf'`.
4. Also update the status label in the "The shelf" section of **`src/pages/index.astro`** if needed.
5. Click **Commit changes...** → **Commit changes**.

---

## 6. What to Do If the Build Turns Red (Troubleshooting)

After you commit a change, you can check its progress by clicking the **Actions** tab at the top of the GitHub repository:

- **Yellow spinning circle:** The website is currently building and uploading (takes ~1–2 minutes).
- **Green checkmark:** Everything succeeded and is live on `createandcare.eu`!
- **Red X:** The build stopped to protect the live website from a broken change (your previous working version remains safely online).

### What a Red X usually means:
1. **`PHOTO CONSENT RULE VIOLATION`:** You added an `image:` to a news post or event, effortless safety check noticed `consent:` was missing or `false`. Edit the file and set `consent: true` (after confirming written consent).
2. **`ImageNotFound` / File path typo:** The filename in `image: "../../assets/news/your-photo.jpg"` doesn't match the exact spelling or `.jpg`/`.png` extension of the file you uploaded to `src/assets/news/`.
3. **Missing quotation mark or `---` line:** Make sure every frontmatter field at the top of your `.md` file sits between the opening `---` and closing `---` lines, and that every opening `"` has a matching closing `"`.

### Who to ask for help:
If you aren't sure why an Action run turned red, copy the link to the red run in the **Actions** tab and send it to the project technical contact at **Integrational e.V.** (`[TECHNICAL CONTACT EMAIL — INTEGRATIONAL e.V.]`).
