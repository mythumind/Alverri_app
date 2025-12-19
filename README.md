# ALVERRI — Companion Edition

> "The friend that grows with you."

Alverri is a React Native (Expo) mobile application designed as a structured digital upbringing system. It features a unique **"Two Apps in One"** architecture that completely adapts the user interface based on the child's age group (Foundation Mode vs. Exploration Mode), unified by a persistent global avatar.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/client) app installed on your iOS/Android device.

### Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npx expo start
```

- **Scan the QR code** with your phone (using Expo Go or Camera app).
- Press **`a`** to open in Android Emulator.
- Press **`i`** to open in iOS Simulator.

---

## 🏗 Architecture Overview

This project uses a **Feature-Based Architecture** to manage the distinct experiences.

### 📂 Directory Structure

```text
src/
├── features/             # Feature Modules (The "Mini-Apps")
│   ├── onboarding/       # Age Selection & Entry
│   ├── foundation/       # Age 0-5 Experience (Scribble/Visual)
│   └── exploration/      # Age 6-10 Experience (Grid/Cards)
├── navigation/           # Root "Switchboard" Navigator
├── shared/               # Reusable Components (Theme, Avatar)
└── store/                # Global State (Zustand)
```

### 🧠 Core Concepts

1.  **Two Apps in One**: The `RootNavigator` checks the user's age and mounts a completely different stack (`FoundationStack` or `ExplorationStack`).
2.  **Global Avatar**: The `AvatarOverlay` component sits *above* the navigation system, allowing the character to persist and animate while screens change underneath.
3.  **Rive Integration**: The avatar is designed to use [Rive](https://rive.app/) for high-performance interactive animation. (See `src/shared/components/AvatarOverlay.tsx`).

## 📚 Documentation
For detailed design specifications, see [SSD.md](./SSD.md).
