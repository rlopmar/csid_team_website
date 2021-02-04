import Layout from 'Layout';
import Hero from 'Hero';
import About from 'About';
import Focus from 'Focus';
import Tools from 'Tools';
import TeamMembers from 'TeamMembers';
import TeamEvents from 'TeamEvents';
import Career from 'Career';

export default function App(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <About />
      <Focus />
      <TeamMembers />
      <Tools />
      <TeamEvents />
      <Career />
    </Layout>
  );
}
