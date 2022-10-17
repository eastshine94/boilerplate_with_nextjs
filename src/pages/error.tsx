import { NextPage } from 'next';
import React, { useEffect } from 'react';

const ErrorTest: NextPage = () => {
  useEffect(() => {
    throw new Error('에러 발생!');
  }, []);

  return <div>에러 발생</div>;
};

export default ErrorTest;
