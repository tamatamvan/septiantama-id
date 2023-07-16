import { AboutMe } from './(home)/components/AboutMe';
import { ContactMe } from './(home)/components/ContactMe/ContactMe';
import { Footer } from './(home)/components/Footer';
import { HeaderNav } from './(home)/components/HeaderNav';

export default function Home() {
  return (
    <div className="bg-black">
      <HeaderNav />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}
