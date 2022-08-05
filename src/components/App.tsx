import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;

/**
 * BIG ISSUES WITH REDUX/REACT-REDUX + TYPESCRIPT:
 *
 * - Imports between files can turn into a mess very quickly
 *
 *   -
 *
 * - Communicating types over to your components can be challenging
 *
 * - Type def files for Redux, React-Redux, and others are possible over-engineered
 */
