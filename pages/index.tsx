import Layout from 'Layout';
import Hero from 'Hero';
import About from 'About';
import Focus from 'Focus';
import Tools from 'Tools';
import TeamMembers from 'TeamMembers';

export default function App(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <About />
      <Focus />
      <Tools />
      <TeamMembers />
    </Layout>
  );
}
