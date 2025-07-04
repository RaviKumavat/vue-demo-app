# Vue Quiz Application

## Overview
This is an interactive quiz application built with Vue.js. The app presents users with a series of predefined questions, provides immediate feedback on their answers, and displays a summary of results at the end. It showcases various Vue features such as computed properties, watchers, dynamic components, and routing.

## Features
- **Vue Instance & Data Binding**: Manages quiz questions and user answers.
- **Directives**: Utilizes `v-if`, `v-for`, and `v-show` to conditionally render questions and feedback.
- **Event Handling**: Captures user answers and navigates between questions.
- **Two-way Binding**: Implements `v-model` for binding selected answers.
- **Computed Properties & Watchers**: Calculates scores and updates the UI based on answer changes.
- **Components**: Includes global and local components for questions and results.
- **Props & Events**: Passes question data and emits answer events.
- **Slots**: Uses named slots for question content and answer options.
- **Dynamic & Async Components**: Loads different question types dynamically (e.g., multiple choice, true/false).
- **Vue Router**: Manages routes for quiz start, question pages, and results page.
- **Pinia for State Management**: Stores quiz progress and answers.
- **Lifecycle Hooks**: Initializes quiz data on component creation.
- **Custom Directives**: Highlights selected answers.
- **Composables**: Implements timer logic as a reusable composable.
- **Teleport & Suspense**: Uses teleport for modals and suspense for loading question components.
- **<script setup>**: Utilizes the `<script setup>` syntax for cleaner component definitions.

## Project Structure
```
vue-quiz-app
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── composables
│   ├── directives
│   ├── router
│   ├── store
│   ├── views
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vue-quiz-app.git
   ```
2. Navigate to the project directory:
   ```
   cd vue-quiz-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application, use the following command:
```
npm run serve
```
Open your browser and navigate to `http://localhost:3000` to access the quiz application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.