import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Clock from '@/components/Clock';
import Competition from '@/components/Competition';
import Calendar from '@/components/Calendar';
import Machine from '@/components/Machine';
import Team from '@/components/Team';
import Identity from '@/components/Identity';
import Sponsor from '@/components/Sponsor';
import Join from '@/components/Join';
import Footer from '@/components/Footer';
import Stripe from '@/components/Stripe';

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Clock />
      <Competition />
      <Stripe />
      <Calendar />
      <Machine />
      <Stripe />
      <Team />
      <Identity />
      <Stripe />
      <Sponsor />
      <Join />
      <Footer />
    </>
  );
}
