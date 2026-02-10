# 🎮 TurnForge – A Turn-Based Roguelike RPG

TurnForge is a lightweight turn-based roguelike RPG built using React and TypeScript.
It focuses on strategic decision-making, clean state-driven game logic, and progressive
difficulty, while remaining performant on low-spec machines.

This project is both a playable game and a learning-focused codebase demonstrating how
game systems can be implemented using standard frontend tools without relying on game
engines, canvas, or WebGL.

------------------------------------------------------------

FEATURES

- Turn-based combat (player always acts first)
- Roguelike progression with increasing difficulty
- Random damage variance and critical hits
- Potion system for both player and enemy
- Simple enemy AI with automatic potion usage
- Battle log showing full combat history
- Clean UI with light animations
- Designed to run smoothly on low-spec laptops

------------------------------------------------------------

TECH STACK

- React (functional components)
- TypeScript
- useReducer for all game logic
- CSS for UI and animations
- Vite for development and bundling

No external game engines or canvas rendering are used.

------------------------------------------------------------

DESIGN PHILOSOPHY

TurnForge is intentionally built using pure React state.

- No real-time game loop
- No physics engine
- No requestAnimationFrame
- No canvas or WebGL
- All actions occur on user input
- All game logic is handled through a reducer

This makes the code predictable, easy to reason about, and easy to extend.

------------------------------------------------------------

GAME LOOP

Battle starts
↓
Player chooses an action (attack / potion)
↓
Enemy takes a turn
↓
HP, potions, and state update
↓
Victory → next stronger enemy
↓
Defeat → game over

------------------------------------------------------------

PROJECT STRUCTURE

src/
├── components/
│   ├── Battle.tsx          (Main game screen)
│   ├── CharacterPanel.tsx (Player & enemy UI cards)
│   ├── ActionPanel.tsx    (Player actions)
│   └── BattleLog.tsx      (Combat history)
│
├── game/
│   ├── reducer.ts         (Core combat & game logic)
│   └── enemyFactory.ts   (Enemy generation & scaling)
│
├── App.tsx
├── main.tsx
└── index.css

------------------------------------------------------------

GETTING STARTED

Prerequisites:
- Node.js (v18 or newer recommended)

Installation:

git clone https://github.com/your-username/turnforge.git
cd turnforge
npm install

Run locally:

npm run dev

Then open:
http://localhost:5173

------------------------------------------------------------

WHY THIS PROJECT EXISTS

This project was built to:

- Practice advanced React state management
- Learn how to design turn-based game systems
- Demonstrate game logic without engines
- Create a portfolio-ready frontend project
- Explore roguelike mechanics in a simple environment

------------------------------------------------------------

POSSIBLE FUTURE IMPROVEMENTS

- Skill system with cooldowns
- Status effects (poison, burn, stun)
- Reward selection after victories
- Save high score using localStorage
- Sound effects and hit feedback
- Mobile-first UI improvements

------------------------------------------------------------

LICENSE

This project is open-source and available under the MIT License.

------------------------------------------------------------

AUTHOR

Built with React, TypeScript, and a focus on clean architecture.
Feel free to fork, modify, and experiment.
