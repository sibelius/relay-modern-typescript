import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Environment } from './relay';
import UserList from './UserList';
import ErrorBoundaryRetry from './ErrorBoundaryRetry';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <ErrorBoundaryRetry>
        <Suspense fallback={<span>Loading</span>}>
          <UserList />
        </Suspense>
      </ErrorBoundaryRetry>
    </RelayEnvironmentProvider>
  )
}

export default App;
