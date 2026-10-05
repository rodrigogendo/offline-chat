# Offline Chat

A lightweight React + TypeScript chat interface designed for a simple, offline-first messaging demo.

The app presents a single-screen chat experience where a user can type a message, choose whether it is sent as the user or robot, and see it appear in the conversation timeline.

## Live demo

https://rodrigogendo.github.io/offline-chat/

## Features

- Mobile-first single-window chat layout
- Sender toggle for user and robot messages
- Multiline message composer with auto-resizing textarea
- Send button disabled when the input is empty
- Local in-memory message state only, with no backend or persistence layer
- Clean responsive styling built with Vite, React, TypeScript, and Tailwind CSS

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app in development mode:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal, usually:
   ```text
   http://localhost:5173
   ```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This project is configured for deployment to GitHub Pages through GitHub Actions.

The deploy workflow builds the app and publishes the generated static site from the `dist` folder.

## Project notes

- Message history lives only in component state and resets on refresh.
- The app is intentionally local and does not require a backend.
- This project is focused on interaction and UI polish rather than persistence or AI integration.
