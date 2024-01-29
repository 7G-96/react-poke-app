// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const BaseStat = ({ valueStat, nameStat, type }) => {
  const bg = `bg-${type}`;

  const ref = useRef(null);

  useEffect(() => {
    const setValueStat = ref.current;
    const calc = valueStat * (100/255);
    setValueStat.style.width = calc + '%';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
  <tr className="w-full text-white">
    <td className="sm:px-5">{nameStat}</td>
    <td className="px-2 sm:px-3">{valueStat}</td>
    <td>
      <div
        className={
          `flex items-start h-2 min-w-[10rem] overflow-hidden rounded bg-gray-600 `
        }
      >
        <div ref={ref} className={`h-3 ${bg}`}></div>
      </div>
    </td>
    <td className="px-2 sm:px-5">255</td>
  </tr>
  )
}

export default BaseStat;
