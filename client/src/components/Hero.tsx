import { useEffect, useState } from "react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import TelegramButton from "./TelegramButton";
import StatCounter from "./StatCounter";
import logoImage from "@assets/logo_1755568189581.jpg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const statsAnimation = useScrollAnimation();
  const infoCardsAnimation = useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="container mx-auto px-8">
      <section className="relative text-center py-16 md:py-32">
        {/* Hero Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Reordered: Subtitle first */}
          <div className="wrapper-section-top mb-5">
            <h2 className="text-lg md:text-xl max-w-3xl mx-auto mb-7 bg-[#00000000] text-[#ffffff] font-bold tracking-wide">High Win Rate • Expert Team • Daily Updates</h2>
          </div>

          {/* Then Title */}
          <div className="headline-wrapper mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 gradient-text-v1 tracking-tight leading-tight bg-[#e6e8edd4]">Gold Market Insights</h1>
          </div>

          {/* Logo moved after title with filter */}
          <div className="logo-container mb-10">
            <img 
              src={logoImage}
              alt="VictoryPipsFX logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl float-anim-v2 hover:scale-105 transition-transform duration-500 halo-soft"
              style={{ filter: 'brightness(1.05) contrast(1.02) saturate(1.08)' }}
            />
          </div>
          
          {/* Feature Chips - Reordered and wrapped */}
          <div className="features-grid-wrapper mb-7">
            <div className="flex flex-wrap justify-center gap-4 mb-7">
              {[
                { icon: "⚡", text: "Daily Ideas" },
                { icon: "📈", text: "Chart Study" },
                { icon: "👥", text: "Pro Team" },
                { icon: "🎯", text: "96% Win Rate" }
              ].map((chip, index) => (
                <span 
                  key={index}
                  className="card-container-x3 px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-105 halo-soft group"
                >
                  <span className="mr-2.5 group-hover:scale-110 transition-transform duration-300">{chip.icon}</span>
                  {chip.text}
                </span>
              ))}
            </div>
          </div>

          {/* Stats moved before CTAs with wrapper */}
          <div className="stats-container-wrapper mb-10">
            <div 
              ref={statsAnimation.ref}
              className={`grid grid-cols-1 md:grid-cols-3 gap-7 max-w-4xl mx-auto reveal-from-below ${statsAnimation.isVisible ? 'visible' : ''}`}
            >
              <StatCounter 
                target={500}
                suffix="+"
                label="Learning Traders"
                delay={0.22}
              />
              <StatCounter 
                target={25}
                suffix="k+"
                label="Active Members"
                delay={0.42}
              />
              <StatCounter 
                target={3}
                suffix="–5+"
                label="Daily Market Posts"
                delay={0.62}
              />
            </div>
          </div>

          {/* Main CTA Buttons - Reordered with wrapper */}
          <div className="cta-buttons-wrapper mb-12 space-y-4">
            <div className="text-center space-y-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3.5 px-11 py-5 rounded-2xl font-black bg-white text-black border-2 border-white transition-all duration-300 hover:scale-105 shake-loop-anim press-shake-anim shadow-2xl text-xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.90l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Contact Team</span>
              </a>
              <br />
              <a
                href="/join"
                className="inline-flex items-center gap-3.5 px-11 py-5 rounded-2xl font-black btn-primary-x9 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 halo-soft shake-loop-anim press-shake-anim text-xl shadow-2xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.90l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Join Telegram Now</span>
              </a>
            </div>
          </div>

          {/* Gold & Forex Signals Info Section */}
          <div className="info-bullets-wrapper max-w-4xl mx-auto mb-12 space-y-4 text-center">
            <p className="text-vpfx-accent text-base md:text-lg font-bold leading-relaxed">
              ✔ Daily gold & forex analysis<br/>
              ✔ Education on price action<br/>
              ✔ Community trader discussions<br/>
              ✔ Free access via Telegram
            </p>
            <div className="mt-7 p-5 bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-vpfx-muted leading-relaxed">
                <strong>Notice:</strong> Educational content only, not financial advice. Trading has risk of capital loss. Past results don't predict future outcomes.
              </p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}
