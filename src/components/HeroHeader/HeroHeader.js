import { HeroHeaderForm } from "../HeroHeaderForm/HeroHeaderForm";
import "./HeroHeader.scss";

export const HeroHeader = () => {
  return (
    <section className="hero-header-container">
      <div className="flex-center">
        <div className="text-container">
          <h1>Wysprzątamy Ci mieszkanie</h1>
          <p className="subtitle">
            Umyjemy okna i podłogi, wytrzemy kurze, wyrzucimy śmieci...
          </p>
          <HeroHeaderForm />
        </div>
      </div>
    </section>
  );
};
