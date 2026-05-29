---
name: react-frontend-helper
description: Helps with React frontend development including component creation, styling, state management, data fetching, and testing. Use this skill when building React applications, creating UI components, managing application state, fetching data from APIs, implementing styles, or writing tests for React components.
---

# React Frontend Helper Skill

This skill assists with React frontend development tasks including component creation, styling, state management, data fetching, and testing.

## When to Use This Skill

Use this skill when:
- Creating new React components
- Implementing styling for React applications (CSS, CSS-in-JS, Tailwind, etc.)
- Managing application state (useState, useReducer, Context API, Redux, etc.)
- Fetching data from APIs (REST, GraphQL, etc.)
- Writing tests for React components (Jest, React Testing Library, etc.)
- Optimizing React application performance
- Implementing accessibility features
- Setting up build and deployment processes

## Component Creation

When creating React components:

1. **Functional Components**: Prefer functional components with hooks over class components
2. **Props Destructuring**: Destructure props in function parameters for clarity
3. **Default Props**: Use default parameters for optional props
4. **Component Composition**: Build complex UIs by composing smaller, reusable components
5. **Naming Conventions**: Use PascalCase for component names

Example:
```jsx
import React from 'react';

const UserCard = ({ name, email, avatarUrl, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
```

## Styling

For styling React applications:

1. **CSS Modules**: Use for scoped styling without runtime overhead
2. **Styled Components**: Use for CSS-in-JS when you need dynamic styling
3. **Tailwind CSS**: Use for utility-first rapid styling
4. **Sass/SCSS**: Use for advanced styling features like nesting and mixins
5. **Inline Styles**: Use sparingly for truly dynamic styles

Example with CSS Modules:
```jsx
// Button.module.css
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button-primary {
  background-color: #007bff;
  color: white;
}

.button-primary:hover {
  background-color: #0056b3;
}

// Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`${styles.button} ${styles[`button-${variant}`]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

## State Management

For managing state in React applications:

1. **Local State**: Use useState for simple component-level state
2. **Complex State**: Use useReducer for complex state logic
3. **Global State**: Use Context API for sharing state across components
4. **External Libraries**: Consider Redux or Zustand for large applications
5. **Immutability**: Always treat state as immutable

Example with useReducer:
```jsx
import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  step: 1
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return initialState;
    case 'changeStep':
      return { ...state, step: action.payload };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <input 
        type="number" 
        value={state.step} 
        onChange={(e) => dispatch({ type: 'changeStep', payload: Number(e.target.value) })} 
      />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;
```

## Data Fetching

For fetching data in React applications:

1. **Custom Hooks**: Extract data fetching logic into reusable custom hooks
2. **Loading States**: Always show loading indicators during requests
3. **Error Handling**: Handle and display errors gracefully
4. **Abort Requests**: Clean up requests on component unmount
5. **Caching**: Consider React Query or SWR for advanced caching

Example custom hook:
```jsx
import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function for aborting fetch on unmount
    return () => {
      // Note: Fetch API doesn't have built-in abort in older browsers
      // For newer browsers, you could use AbortController
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
```

## Testing

For testing React components:

1. **Testing Library**: Prefer @testing-library/react over Enzyme
2. **User-Centric Tests**: Test how users interact with components
3. **Mocking**: Mock external dependencies like API calls
4. **Accessibility**: Test for accessibility issues
5. **Snapshot Testing**: Use sparingly for regression testing

Example test with React Testing Library:
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

test('displays user information', () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: 'https://example.com/avatar.jpg'
  };
  
  render(<UserCard {...user} />);
  
  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
  expect(screen.getByAltText(/john doe's avatar/i)).toHaveAttribute(
    'src',
    'https://example.com/avatar.jpg'
  );
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: 'https://example.com/avatar.jpg'
  };
  
  render(<UserCard {...user} onClick={handleClick} />);
  
  fireEvent.click(screen.getByText(/john doe/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Best Practices

1. **Folder Structure**: Organize components by feature or route, not by file type
2. **Performance**: Use React.memo, useCallback, and useMemo appropriately
3. **Accessibility**: Follow WCAG guidelines and test with screen readers
4. **Error Boundaries**: Implement error boundaries to catch UI errors
5. **Code Splitting**: Use React.lazy and Suspense for code splitting
6. **TypeScript**: Consider using TypeScript for better developer experience
7. **Linting and Formatting**: Use ESLint and Prettier for consistent code
8. **Environment Variables**: Store configuration in environment variables
9. **Bundle Analysis**: Regularly analyze bundle size with tools like webpack-bundle-analyzer
10. **Continuous Integration**: Set up CI/CD pipelines for testing and deployment

## Resources

For more information on React development:
- Official React Documentation: https://reactjs.org/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- React Router: https://reactrouter.com/
- Styled Components: https://styled-components.com/
- Tailwind CSS: https://tailwindcss.com/
- React Query: https://react-query.tanstack.com/