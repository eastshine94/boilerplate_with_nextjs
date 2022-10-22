import type { NextPage } from 'next';
import Link from 'components/atoms/Link';

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <div>
          <Link href={'/rq-test'}>rq-test</Link>
        </div>
        <div>
          <Link href={'/zustand-test'}>zustand-test</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
