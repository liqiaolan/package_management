import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';

const Button = () => {
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    console.log('看看useEffect能执行不');
  }, []);
  return (
    <div>
      <p>渲染的内容{count}</p>
      <button
        onClick={() => {
          setCount((preState) => {
            return preState + 1;
          });
        }}
      >
        这是button
      </button>
    </div>
  );
};
export default Button;
