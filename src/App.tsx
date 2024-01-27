import { Provider } from "react-redux";
import { store } from './state';
import RepositryLists from "./component/RepositryLists";


function App() {
  return (
    <Provider store={store} >
      <RepositryLists />
    </Provider>
  );
}

export default App;
