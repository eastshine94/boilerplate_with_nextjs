import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import useTestStore from 'stores/useTestStore';

const Test: NextPage = () => {
  const { name, age, initializeState, setName, setAge } = useTestStore();
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAge(Number(event.target.value));
  };

  useEffect(() => {
    return () => {
      initializeState();
    };
  }, []);
  return (
    <div>
      <div>Name: {name}</div>
      <div>
        changeName: <input type="text" onChange={handleNameChange} />
      </div>
      <div>Age: {age}</div>
      <div>
        changeAge: <input type="number" onChange={handleAgeChange} />
      </div>
    </div>
  );
};

export default Test;
