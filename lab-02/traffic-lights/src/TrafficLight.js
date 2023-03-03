import './TrafficLight.css'
import Light from './Light'
import { useEffect, useState } from 'react';

export default function TrafficLight({timeout}) {
  const [index, setIndex] = useState(0)

  const activeStates = [
    0,
    1,
    2,
    1,
  ]

  function nextState() {
    setIndex(previousIndex => (previousIndex+1) % activeStates.length)
  }

  useEffect(() => {
    const interval = setInterval(nextState, timeout)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="traffic-light">
        <Light color="red" active={activeStates[index] === 0} />
        <Light color="orange" active={activeStates[index] === 1} />
        <Light color="green" active={activeStates[index] === 2} />
    </div>
  );
}
