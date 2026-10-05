# Project: Offline Chat

Single window chat where the user can send messages as both the user and the robot/assistant via toggle button

## Tech Stack

-Vite + React + Typescript + Tailwind
-Use types instead of interface, should be at src/types
-Components should be at src/components
-Message history should be in a state and won't persist
-Mobile-first and responsive

## Visuals

-Screen has light grey background
-The chat screen, including history and input, will have max width and centralized in larger screens
-Input will be in a card with off-white background and adjustable height depending on the message length
-Input card at the botton of the screen and message history at the top
-Inside the input card:
    --Send button on the right, disabled when there's no message typed
    --Toggle button on the left, to switch who's sending the message, user or robot. User's messages positioned at the right of the history, robot's messages positioned at the left of the history
    --When robot toggle is on, input should have a dark purple border