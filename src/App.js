import logo from './logo.svg';
import './App.css';
import { RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue  
} from 'recoil';
import TodoList from './TodoList';

export const todoListState = atom({
  key: 'todoListState',
  default: []
})

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
