import { useDispatch } from 'react-redux';
import './App.css';
import Card from "./components/Card";
import { setId } from './reducers/ISINSlice';
import {ISIN_IDs} from './data';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      {
        ISIN_IDs.map((node) => <button key={node} onClick={() => dispatch(setId({id: node}))}>
          {node}
        </button>)
      }
      
      <Card />
    </div>
  );
}

export default App;
