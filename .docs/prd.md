# Product Requirements Document (PRD)

## 1. Product Overview

Project name: Offline Chat

Offline Chat is a single-window chat experience designed as a lightweight React + TypeScript interface for demonstrating message exchange between a user and a robot/assistant. The app is intentionally local and offline-first in behavior: the message history lives only in component state and does not persist beyond the current session.

The product is a focused, mobile-first chat screen that lets the user compose a message, choose the sender via a toggle, and send messages into a shared conversation timeline.

## 2. Product Goals

- Provide a clean, single-screen chat UI that works well on mobile and scales to larger screens.
- Allow the user to simulate sending messages as either the user or the robot.
- Keep the interaction simple and intuitive: message input, preview, sender selection, and send action in one place.
- Create a polished front-end experience using Vite + React + TypeScript + Tailwind.
- Ensure the UI behaves predictably without requiring backend storage or network connectivity.

## 3. User Needs

- The user wants to quickly type a message and send it without leaving the screen.
- The user wants to toggle between sending as themselves or as the assistant/robot.
- The user wants the conversation history to be easy to read and visually grouped by sender.
- The user wants the interface to be comfortable on smaller screens and remain centered with a controlled width on larger screens.

## 4. Core Experience

### Primary Flow

1. User opens the chat screen.
2. User types a message into the input area.
3. User chooses whether the sender is the user or the robot via the toggle.
4. User presses the send button.
5. A new message is added to the conversation thread with alignment and styling matching the selected sender.
6. The input clears, the send button disables, and the user can continue the conversation.

## 5. Functional Requirements

### 5.1 Chat Messaging

- The app must render a message list in chronological order.
- Each message must include:
  - text content
  - sender type: user or robot
  - timestamp (optional but recommended for polish; not required by the brief)
- Messages sent by the user appear on the right side of the chat history.
- Messages sent by the robot appear on the left side of the chat history.
- Message history is kept in local state only and is not persisted to storage.

### 5.2 Sender Toggle

- The app must include a toggle button in the composer area.
- The toggle switches between:
  - user sender mode
  - robot sender mode
- When the robot option is selected, the input card must display a dark purple border to visually distinguish it.
- The toggle should be clearly labeled and easy to use on mobile.

### 5.3 Input Composer

- The input area is a card with an off-white background.
- The input height should expand as the user types multiple lines of content.
- The send button is positioned on the right side of the input card.
- The send button is disabled when the input is empty or only whitespace.
- The input should support multi-line text entry for comfortable chat composition.

### 5.4 Screen Layout

- The page uses a light grey background.
- The chat interface, including history and input, is visually centered with a maximum width on larger screens.
- The input composer stays pinned near the bottom of the screen.
- The message history occupies the upper portion of the screen and scrolls naturally as more messages are added.

## 6. Visual and UX Requirements

- Mobile-first, responsive layout with a strong focus on readability.
- Light, neutral background palette with subtle visual separation between messaging blocks.
- Chat bubbles should use clear left/right alignment to communicate sender identity.
- Input card should feel tactile, with enough padding and rounded corners to match a modern chat UI.
- The robot mode styling should stand out without making the interface feel cluttered.

## 7. Technical Requirements

- Use Vite + React + TypeScript.
- Use Tailwind for styling.
- Use TypeScript types instead of interfaces, stored in a dedicated types directory.
- Use a dedicated components directory for UI structure.
- Keep functional logic simple and colocated within component state or small helper functions.
- Do not add unnecessary backend dependencies or persistence layers.

## 8. Non-Goals

- No authentication flow.
- No persistent message storage.
- No real AI integration.
- No multi-room chat.
- No message editing or deletion features.
- No support for attachments or media uploads.

## 9. Acceptance Criteria

### Functional

- A user can type a message and send it.
- A user can switch between user and robot sender modes.
- Sent messages appear in the correct side of the conversation based on the sender.
- The send action is disabled when the input is empty.
- The input clears after a message is sent.

### Visual

- The background is a light grey color.
- The message list and composer are centered within a container on larger screens.
- The composer card has an off-white background.
- Robot mode is visually distinct via a dark purple border.
- The layout feels usable on mobile screens.

### Technical

- The project uses Vite, React, TypeScript, and Tailwind.
- Types are organized in a dedicated types directory.
- Components are organized in a dedicated components directory.

## 10. Risks and Constraints

- UI polish may be limited by the time-boxed front-end scope.
- The brief intentionally keeps storage out of scope, which means no persistence between refreshes.
- The design must stay simple enough to remain highly readable on small screens.
- The robot toggle should not introduce confusing state management or render issues.

## 11. Implementation Tasks (Sequential Order)

### Phase 1: Foundation and Structure

1. Set up the app shell and layout structure for the chat screen.
2. Confirm the visual container, page background, and screen centering behavior.
3. Create the initial Tailwind styling foundation and app theme tokens.
4. Establish the project structure for components and types.

### Phase 2: Data Model and State

5. Define the message type used by the chat application.
6. Create the initial chat state with an array of messages.
7. Add sender state for toggling between user and robot modes.
8. Add input state and validation logic for empty message prevention.

### Phase 3: Chat UI

9. Build the message history container and render messages in chronological order.
10. Style the message bubbles to align right for user messages and left for robot messages.
11. Ensure the layout remains readable and responsive across screen sizes.

### Phase 4: Composer and Interaction

12. Build the input card with off-white background and multiline textarea behavior.
13. Add the sender toggle within the composer and style the robot mode border.
14. Add the send button and disable it when the input is empty.
15. Implement the send action to append a message to the chat history and reset the input.

### Phase 5: Polish and Validation

16. Review spacing, overflow, and alignment across mobile and desktop layouts.
17. Verify the toggle state and message grouping are visually consistent.
18. Test UI responsiveness and edge cases such as empty input and long messages.
19. Final pass for interaction clarity, visual consistency, and code organization.

## 12. Success Definition

The project is successful when the user can open the app, type a message, switch sender mode, send a message, and clearly see the message appear in the correct side of the conversation while maintaining a clean, responsive, single-screen chat experience.

## Phase Checklist

- [x] Phase 1: Foundation and Structure
- [x] Phase 2: Data Model and State
- [x] Phase 3: Chat UI
- [x] Phase 4: Composer and Interaction
- [x] Phase 5: Polish and Validation