# WebTime — Web Usage Tracker

A lightweight, privacy-focused Google Chrome extension that tracks how much time you spend on different websites. Built with HTML, CSS, vanilla JavaScript, Vite, and the Chrome Extensions API, WebTime aims to help users understand their browsing habits and manage their time more effectively.

<p align="center">
   <img
    src="https://imgur.com/619B5Ck.png"
    alt="WebTime-usage-tracker image"
    style="max-width: 100%; height: auto;"
  />
</p>

## 📌 About the Project

WebTime is a browser extension designed to monitor the time spent on individual websites while browsing Google Chrome.

The extension tracks the active browser tab, records time spent on each website, and organizes usage data into daily summaries. Users can view their most frequently used websites, identify where their time goes, and gain insights into their browsing habits.

The project is designed to operate locally within the browser, keeping usage statistics on the user's device without requiring an external backend.

## ✨ Planned Features

- **Website Time Tracking** — Measure time spent on individual websites while their tabs are active.
- **Daily Usage Statistics** — View total tracked time for the current day.
- **Website Rankings** — Identify the websites consuming the most time.
- **Analytics Dashboard** — Visualize browsing activity through charts and statistics.
- **Historical Tracking** — Review usage data from previous days.
- **Website Exclusions** — Exclude specific domains from tracking.
- **Local Data Storage** — Preserve usage statistics between browser sessions.
- **Privacy Controls** — Allow users to clear their tracking history.
- **Minimal Dark UI** — Access a clean, modern interface with dark surfaces, subtle borders, and a consistent accent colour.
- **Fast Development Workflow** — Use Vite for efficient local development and production builds.

*Note: These features describe the intended functionality. Availability depends on implementation progress.*

## 🛠️ Technologies Used

### Core Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Structures the extension popup, dashboard, and settings pages. |
| CSS3 | Handles styling, layouts, responsive design, and the minimal dark theme. |
| JavaScript (ES6+) | Implements tracking logic, time calculations, event handling, and UI interactions. |
| Vite | Provides development tooling, module processing, and production builds. |

### Chrome Extensions API

| API | Purpose |
|---|---|
| Chrome Tabs API | Detects active-tab changes and relevant navigation events. |
| Chrome Windows API | Detects when Chrome windows gain or lose focus. |
| Chrome Storage API | Stores website usage statistics and user settings locally. |
| Chrome Runtime API | Coordinates communication between extension components. |
| Chrome Alarms API | Supports optional scheduled tasks and periodic maintenance. |

### Extension Platform

**Manifest V3** — Configures extension permissions, the background service worker, popup pages, and other extension resources.

### Development Tools

- **Vite** — Local development and production build tooling.
- **Git** — Version control.
- **GitHub** — Repository hosting and project collaboration.

## 🏗️ Project Architecture

WebTime follows a modular architecture that separates background tracking, data storage, and the user interface.

```text
webtime/
├── manifest.json
├── package.json
├── vite.config.js
├── index.html
├── background/
│   └── service-worker.js
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.css
│   └── dashboard.js
├── settings/
│   ├── settings.html
│   ├── settings.css
│   └── settings.js
├── shared/
│   ├── storage.js
│   ├── tracking.js
│   └── utils.js
├── assets/
│   └── icons/
└── README.md
```

*Note: This is the proposed source structure. Vite's configuration will determine how these files are built and organized in the production output.*

## ⚙️ How It Works

1. Chrome browser events notify the background service worker when the active tab or window focus changes.
2. The tracking logic determines whether the current website should be tracked.
3. Elapsed time is calculated using timestamps and attributed to the appropriate domain.
4. Usage statistics are saved locally using the Chrome Storage API.
5. The popup and dashboard read stored data to display summaries and analytics.

Tracking is designed to work independently of the popup, so closing the popup does not stop website monitoring.

Vite handles the development workflow and bundles the extension's frontend and background scripts into a build that Chrome can load.

## 🎨 User Interface

WebTime aims to provide a modern, minimal interface inspired by contemporary productivity dashboards.

The design direction includes:

- Dark charcoal backgrounds and layered surfaces.
- Subtle borders and rounded cards.
- Clear typography and consistent spacing.
- A restrained teal accent colour for highlights and progress indicators.
- Readable website usage statistics and visual charts.
- A compact popup and a more detailed analytics dashboard.

The interface will be implemented using vanilla HTML, CSS, and JavaScript without requiring a frontend framework.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) with [Corepack](https://nodejs.org/api/corepack.html).
- [Google Chrome](https://www.google.com/chrome/).
- Basic knowledge of JavaScript and Chrome extension development.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd webtime
```

Replace `<your-repository-url>` with the URL of your GitHub repository.

### 2. Install Dependencies

```bash
corepack enable
pnpm install
```

The `packageManager` field pins pnpm to the project-supported version. Corepack will use that version automatically. If enabling Corepack fails because you do not have permission to write its global shims, install the pinned pnpm version in your user directory instead:

```bash
npm install --global --prefix "$HOME/.local" pnpm@12.15.0
```

Make sure `$HOME/.local/bin` is on your `PATH`.

### 3. Start the Development Environment

```bash
pnpm run dev
```

The Vite development server is useful for developing the frontend. However, Chrome extension APIs and the background service worker must be tested within an extension-compatible build or development setup.

### 4. Build the Extension

```bash
pnpm run build
```

Vite's build configuration must include the extension's HTML entry points, Manifest V3 manifest, and background service worker. If an extension integration plugin is configured, such as CRXJS, it can help manage this process.

### 5. Preview the Production Build

```bash
pnpm run preview
```

### 6. Load the Extension in Chrome

Once the extension build has been generated:

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated extension output directory, typically `dist/` when configured with Vite.
6. Pin WebTime to the Chrome toolbar for easy access.

The extension can then be tested locally as development progresses.

## 🔒 Privacy

Privacy is a core design principle of WebTime.

- Usage statistics are intended to remain stored locally in the browser.
- No account or external backend is required for the core functionality.
- Tracking focuses on website domains and elapsed time rather than page contents.
- Users should be able to clear their stored usage history.
- The extension should request only the permissions necessary for its functionality.
- Browsing data should not be transmitted to external servers.

WebTime is intended to measure browser activity, not to determine whether someone is physically looking at their screen or actively interacting with a page.

## 🧪 Development Roadmap

- [ ] Set up the Manifest V3 configuration.
- [ ] Configure Vite for Chrome extension development.
- [ ] Implement background tracking with the Chrome Tabs and Windows APIs.
- [ ] Calculate and persist website usage durations.
- [ ] Build the extension popup.
- [ ] Display daily usage statistics and website rankings.
- [ ] Create the analytics dashboard.
- [ ] Add historical usage tracking.
- [ ] Implement website exclusion settings.
- [ ] Add history clearing and data export.
- [ ] Test tracking accuracy, browser restarts, and service worker suspension.
- [ ] Refine the dark theme, accessibility, and UI responsiveness.
- [ ] Prepare extension icons, screenshots, and documentation.

## 🎯 Project Goals

The primary goal of WebTime is to build a practical, privacy-conscious browser extension while exploring:

- Browser extension development using Manifest V3.
- Event-driven programming with JavaScript.
- Vite-based development and production build workflows.
- Browser APIs and background service workers.
- Local data persistence and state management.
- UI design with vanilla HTML and CSS.
- Data visualization and dashboard development.
- Software architecture, testing, and edge-case handling.

## MVP Checklist
- [ ] Track time on the active website
- [ ] Pause tracking when Chrome loses focus
- [ ] Save daily totals per domain
- [ ] Display today's top five websites in the popup
- [ ] Provide a clear-history control

## 🔮 Future Improvements

Potential future enhancements include:

- Custom website categories.
- Daily time limits for individual websites.
- Optional distraction alerts.
- Weekly and monthly usage reports.
- Productivity goals and usage streaks.
- CSV and JSON data export.
- Optional cross-device synchronization with explicit user consent.
- Additional dashboard themes and customization options.

## 📄 License

A license can be added to this project when the preferred open-source or proprietary distribution terms have been decided.

---

**WebTime** — Understand your browsing habits, one website at a time.
