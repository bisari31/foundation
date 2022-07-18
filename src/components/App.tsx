import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import store from 'store';
import Abc, { Button } from './Abc';

interface List {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {
  const [list, setList] = useState<List[]>([]);
  const [text, setText] = useState<string>('');
  const listNum = useRef<number>(0);

  useEffect(() => {
    const storageListData = store.get('list');
    const storageNumData = store.get('listNum');
    if (storageListData && storageListData.length) {
      setList(storageListData);
      listNum.current = storageNumData;
    }
  }, []);

  useEffect(() => {
    store.set('list', list);
    store.set('listNum', listNum.current);
  }, [list]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmitAddListItem = (e: FormEvent) => {
    e.preventDefault();
    const newList = {
      id: listNum.current,
      text,
      isDone: false,
    };
    setList((prev) => [...prev, newList]);
    listNum.current += 1;
    setText('');
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setList((prev) =>
      prev.map((item) =>
        String(item.id) === e.target.value
          ? { ...item, isDone: !item.isDone }
          : item,
      ),
    );
  };

  const onClickDeleteItem = (e: MouseEvent<HTMLButtonElement>) => {
    const newList = list.filter(
      (item) => String(item.id) !== e.currentTarget.value,
    );
    setList(newList);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitAddListItem}>
        <input type="text" value={text} onChange={onChangeText} />
        <button type="submit">등록</button>
      </form>
      <ul>
        {list?.map((item: List) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={onChangeChecked}
              checked={item.isDone}
              value={item.id}
            />
            {item.text}
            <button onClick={onClickDeleteItem} value={item.id} type="button">
              삭제
            </button>
          </li>
        ))}
      </ul>
      <Abc />
      <Button color="blue">버튼</Button>
    </div>
  );
}

export default App;
