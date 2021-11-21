import { useContext, useEffect, useRef } from "react";
import Client from "./client";
import { CounterContext } from "./CounterData";

function CounterValue(){
    const [store, setStore] = useContext(CounterContext);
    const updateStore = useRef((value)=>{
        if(value)
            setStore(value);
    });
    
    useEffect(()=>{
      Client.getCounter().then((value)=>{
        updateStore?.current(value);
      });
    },[]);
  
    return(
      <div style={{marginTop:10, marginBottom:10, padding:4, fontSize:'12px'}}>{`Counter value : ${store.counter>0 ? store.counter: ''}`}</div>
    )
  }

export default CounterValue;