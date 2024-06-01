import About from '@/components/About';
import Favorite from '@/components/Favorite';
import Main from '@/components/Main'
import Model from '@/components/Model';
import Sponsor from '@/components/Sponsor';

function page() {
  return (
		<>
			<Main />
      <About />
      <Favorite />
      <Model />
      <Sponsor />
    </>
  );
}

export default page;