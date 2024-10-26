const data = [
  {
    title: "Imperative UI",
    description: `Imperative UI refers to a programming style where you explicitly tell the framework or library how to change the UI. 
  This means you're providing direct instructions on what to do and when to do it. 
  In contrast to declarative programming (like React's typical usage), 
  where you describe what the UI should look like based on the state, 
  imperative programming focuses on the step-by-step procedures to achieve a certain UI state.`,
    keyPoints: [
      "Direct manipulation of the DOM.",
      "Involves methods like document.getElementById and setAttribute.",
      "More control over the process, but can lead to more complex code.",
    ],
  },
  {
    title: "React Router",
    description: `React Router is a standard library for routing in React applications. 
  It enables the navigation among views of various components in a React application, 
  allows for dynamic routing, and enables handling of nested routes.`,
    keyPoints: [
      "Declarative routing that is clear and straightforward.",
      "Dynamic routing adjusts based on the application's state.",
      "Supports nested routes for creating routes within other routes.",
      "Enables code splitting for performance improvements.",
    ],
  },
  {
    title: "High Performance",
    description: `High performance in React applications involves optimizing the application's speed, responsiveness, 
  and overall user experience. This can include various techniques to enhance performance.`,
    keyPoints: [
      "Code splitting to load only necessary code and reduce initial load time.",
      "Memoization using React.memo, useMemo, and useCallback to prevent unnecessary re-renders.",
      "Virtualization to render only the visible portion of a long list.",
      "Minimizing state updates to limit re-renders.",
    ],
  },
  {
    title: "Hooks",
    description: `Hooks are functions that let you use state and other React features without writing a class. 
  They allow you to manage state and side effects in functional components, making your components cleaner and more reusable.`,
    keyPoints: [
      "useState: Allows functional components to have state.",
      "useEffect: Manages side effects, such as data fetching or subscriptions.",
      "Custom Hooks: Enables the extraction of component logic into reusable functions.",
      "Encourages functional programming patterns in React.",
    ],
  },
];

export default data;
