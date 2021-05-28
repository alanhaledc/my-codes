/*
 * @Author: Hale
 * @Description: useObservable demo
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

import React from "react";
import ReactDOM from "react-dom";
import { useObservable } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

function App() {
  const value = useObservable(() => interval(500).pipe(map((val) => val * 3)));

  return (
    <div className="App">
      <h1>Incremental number: {value}</h1>
    </div>
  );
}
