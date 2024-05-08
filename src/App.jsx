import { AppProvider } from './context'
import Router from './router';

export default function App() {
  
  return (
    <>
      <AppProvider>
        <Router />
      </AppProvider>
    </>
  );
}