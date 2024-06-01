import React, { useState } from 'react';
import CountComponent from './count';
import ButtonComponent from './button';

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? 'It is higher than 10!' : 'Keep counting...';

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    };

    return (
        <>
            <CountComponent count={count} />
            <ButtonComponent handleClick={handleIncrease} text={"+1"} />
            <ButtonComponent handleClick={handleDecrease} text={"-1"} />
            <p>{feedback}</p>
        </>
    );
};

export default CounterComponent;
