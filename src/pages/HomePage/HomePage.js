import { HeroHeader } from "../../components/HeroHeader/HeroHeader";
import { LogoHeader } from "../../components/LogoHeader/LogoHeader";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <section className="homepage-container">
      <LogoHeader showButton />
      <HeroHeader />
    </section>
  );
};
