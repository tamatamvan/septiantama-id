import { Metadata } from 'next';

import { AboutMe } from './(home)/components/AboutMe';
import { ContactMe } from './(home)/components/ContactMe/ContactMe';
import { HeaderNav } from './(home)/components/HeaderNav';
import { Footer } from '~/components/Footer';

export const metadata: Metadata = {
  title: "Septian Tama's Personal Website",
  description:
    "Hi I'm Tama, an experienced fullstack software engineer with main expertise in front-end web development.",
};

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
