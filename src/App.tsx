/* eslint-disable react-hooks/exhaustive-deps */
import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewSpace } from "./pages/NewSpace";

import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/new-space" component={NewSpace} />
      </AuthContextProvider>  
    </BrowserRouter>
  );
}

export default App;
