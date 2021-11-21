import { useContext, useEffect, useRef, useState } from "react";
import Client from "../client/index.js";
import { CounterContext } from "../CounterData";
import Loader from "../loader/Loader.js";
import { debounce } from "../Utils";
import './Counter.css'

function Counter() {
  const [store, setStore] = useContext(CounterContext);
  const [data, setData] = useState(store.counter);
  const [loading, setLoading] = useState(0);
  const firstUpdate = useRef(true);
  const network = useRef(debounce((value) => {
    setLoading((val) => (val + 1));
    Client.updateCounter(value).then((res) => {
      setLoading((val) => (val - 1));
      if (res) {
        setStore(res)
      }
    });
  }, 300));

  if(data<0){
    if(store.counter>0)
    setData(store.counter);
  }

  useEffect(()=>{
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    network?.current(data);
  },[data]);

  const changeValue = (value) => {
    setData((data)=>(data + value < 1 ? 1 : data + value > 1001 ? 1000 : data + value));
  };

  const setValue = (value) => {
    const correctData = value < 1 ? 0 : value > 1001 ? 1000 : value;
    setData(correctData);
  }


  return (
    <div>
      <Loader loading={loading > 0} />
      <div className='counter'>
        <button className='counter-inc' onClick={() => { changeValue(-1) }} >-</button>
        <div className='counter-txt' >
          <input type="number" max="1000" min="1" value={(Number(data)>0?data : '').toString()} onChange={(event) => { setValue(Number(event.target.value)) }} />
        </div>
        <button className='counter-dec' onClick={() => { changeValue(1) }}>+</button>
      </div>
    </div>
  )
}

export default Counter;