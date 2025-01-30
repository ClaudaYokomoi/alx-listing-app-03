import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import MainComponent from './MainComponent'; // Adjust to your actual component

function App() {
  return (
    <ErrorBoundary>
      <MainComponent />
    </ErrorBoundary>
  );
}

export default App;

