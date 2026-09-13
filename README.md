<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

1. name of your project -
   name of my project is "Explore Technologies"
2. A litte description - Explore techonologies with stack builder. Tech Stack Builder is a React + TypeScript web application where users can easily explore different technologies and build their own development stack. Users can add technologies to their stack, remove individual technologies, remove all selected tech. Also see visual feedback through dynamic card borders and toast notification.
3. 3 features abour my project -
4. remove all techonologies at once
5. toast notification for user actions
6. responsive design with css

Answering the React Question-------

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows me to write HTML-like code inside JavaScript or TypeScript. I used JSX in my React components to create the structure and UI of my website.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only, so the child component cannot directly change them.

State is data that belongs to a component and can change over time. When the state changes, React re-renders the component.

3. What does the useState hook do, and where did you use it in this project?

The useState hook allows me to create and manage state inside a functional React component.

I used useState to store the selected technologies. When I click the "Add to Stack" button, the selected technology is added to the state. When I remove a technology or click "Remove All", the state is updated accordingly.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook allows me to perform side effects in a React component, such as fetching data, calling an API, or working with external resources.

I used useEffect to load my technology data from the JSON file when the component first renders. This allows me to get the technology information and display it dynamically instead of hardcoding every technology card.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key for each item in a .map() list so that it can identify which items have changed, been added, or been removed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

I used conditional rendering in my Selected Technologies section. If the user has not selected any technology, I show an empty-stack message. If they have selected technologies, I display the selected technology cards.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from a parent component to a child component using props.
