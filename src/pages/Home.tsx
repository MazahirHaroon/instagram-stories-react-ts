import { Logo } from '@components';
import { Carousel } from '@instagram-ui';

import { stories } from '@constants/stories';

const Home = () => {
  return (
    <div className='h-full'>
      <Logo />
      <Carousel items={stories} />
    </div>
  );
};

export default Home;
