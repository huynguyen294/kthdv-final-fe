import { memo } from 'react';
import { Row } from 'react-bootstrap';

import { HotProduct } from '../index';

function Home() {
  return (
    <div className="home">
      <Row>
        <HotProduct />
      </Row>
    </div>
  );
}

export default memo(Home);
