import { memo } from 'react';

import { HotProduct } from '../index';

function Home() {
  return (
    <div className="home">
      <HotProduct />
    </div>
  );
}

export default memo(Home);
