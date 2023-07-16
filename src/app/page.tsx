import { AboutMe } from './(home)/components/AboutMe';
import { HeaderNav } from './(home)/components/HeaderNav';

export default function Home() {
  return (
    <div className="bg-black">
      <HeaderNav />
      <AboutMe />
    </div>
  );
}
