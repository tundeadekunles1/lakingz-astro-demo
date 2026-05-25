# Lakingz Services — Website

The marketing site for **Lakingz Services**, a CPA-led accounting and tax firm in Ontario.
Built with [Astro](https://astro.build/) — a modern framework for fast, content-focused websites.

This guide walks through getting the site running on your own computer (Mac or Windows) so you
can preview changes locally before they go live.

---

## What you need first

You only need **two things** installed: Git and Node.js. npm (the tool that installs the project's
libraries and runs its commands) comes bundled with Node.js automatically — you don't install it separately.

| Tool | Why it's needed | Minimum version |
| :--- | :--- | :--- |
| [Git](https://git-scm.com/) | Downloads the project and tracks your changes | any recent version |
| [Node.js](https://nodejs.org/) | Runs the site and its build commands | **22.12 or newer** |

### Installing them

**On a Mac**

1. Install [Homebrew](https://brew.sh/) if you don't have it (a tool that installs other tools). Paste this into the Terminal app:
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Then install Git and Node:
   ```sh
   brew install git node
   ```

**On Windows**

1. Download and run the **Git** installer from [git-scm.com](https://git-scm.com/download/win) (accept the default options).
2. Download and run the **Node.js LTS** installer from [nodejs.org](https://nodejs.org/) (this gives you Node *and* npm).
3. Use the **Git Bash** terminal that came with Git for the commands below (it behaves like the Mac terminal).

### Check it worked

Open your terminal and run these — each should print a version number:

```sh
git --version
node --version   # must be v22.12.0 or higher
npm --version
```

If `node --version` shows something older than `v22.12.0`, install the newer version from [nodejs.org](https://nodejs.org/) before continuing.

---

## Getting the site running

Run these one at a time from your terminal:

```sh
# 1. Download the project (replace the URL with this repo's address)
git clone <repository-url>

# 2. Move into the project folder
cd cpafour

# 3. Install the project's libraries (this reads package.json and downloads everything)
npm install

# 4. Start the local preview server
npm run dev
```

After step 4, your terminal will show a local address — open it in your browser:

> **http://localhost:4321**

Leave that terminal window open while you work. The site **auto-refreshes** every time you save a file,
so you see your changes instantly. Press `Ctrl + C` in the terminal to stop the server when you're done.

---

## Commands you'll use

Run all of these from inside the project folder:

| Command | What it does |
| :--- | :--- |
| `npm install` | Installs all the libraries the project needs (run once after cloning, and whenever `package.json` changes) |
| `npm run dev` | Starts the local preview at `http://localhost:4321` with auto-refresh |
| `npm run build` | Builds the final, production-ready site into the `dist/` folder |
| `npm run preview` | Shows you the built site exactly as it will appear live (run `build` first) |
| `npm run astro check` | Scans the code for type and template errors without building |

> **Prefer [Bun](https://bun.sh/)?** It's optional and not required. If you have it installed, every command above
> works by swapping `npm run` for `bun` (e.g. `bun dev`, `bun run build`). If you're unsure, just use npm.

---

## Automatic checks before each commit

This project runs three quick checks **automatically every time you `git commit`**. If any of them fail,
the commit is stopped so broken code never gets saved. You don't have to do anything to turn this on —
it sets itself up the first time you run `npm install`.

The checks run in this order:

| Step | Command | Catches |
| :--- | :--- | :--- |
| 1. Lint | `npm run lint` | Code mistakes and risky patterns (via ESLint) |
| 2. Type check | `npm run check` | Type and template errors in `.astro` files |
| 3. Build | `npm run build` | Anything that would stop the site from building |

If a commit is blocked, the terminal tells you which step failed. Fix what it points to, then commit again.

**Want to check your work first?** Run any of those commands yourself at any time — for example
`npm run lint` to see lint issues early. (In ESLint, real problems are *errors* and stop a commit, while minor
style notes are *warnings* and won't block you.)

> **Need to save a work-in-progress commit while something is still broken?** You can commit with
> `git commit --no-verify` to skip the checks that one time. Use it sparingly — it bypasses the safety net.

---

## How the project is organized

```text
cpafour/
├── public/              Static files served as-is (logos, images, favicon)
├── src/
│   ├── components/      Reusable page sections (Hero, Navbar, Services, Team, Contact, Footer…)
│   ├── layouts/         The shared page shell — <head> tags, SEO, and overall structure
│   ├── pages/           Each file here becomes a page/route (index.astro is the home page)
│   └── styles/          Global CSS
├── astro.config.mjs     Astro's configuration
├── package.json         Project info, dependencies, and the commands above
└── tsconfig.json        TypeScript settings
```

**The short version:** the home page lives in `src/pages/index.astro`, and it's assembled from the
section components in `src/components/`. To change a part of the page, find the matching component
(e.g. the top navigation is `Navbar.astro`) and edit it. Images and the logo live in `public/`.

---

## If something goes wrong

**`command not found: npm` (or `git`)**
The tool isn't installed or your terminal hasn't picked it up yet. Re-check the install steps above, then close and reopen your terminal.

**`npm install` fails or behaves strangely**
Delete the `node_modules` folder and the `package-lock.json` file, then run `npm install` again to start fresh.

**"Port 4321 is already in use"**
Another copy of the dev server is still running. Find the earlier terminal window and press `Ctrl + C`, or restart your computer if you can't find it.

**The browser page is blank or shows an old version**
Hard-refresh the page (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows) to clear the cached version.

---

## Learn more about Astro

- [Astro documentation](https://docs.astro.build)
- [Astro Discord community](https://astro.build/chat)
