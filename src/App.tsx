import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewSpace } from "./pages/NewSpace";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/new-space" component={NewSpace} />
    </BrowserRouter>
  );
}

export default App;
