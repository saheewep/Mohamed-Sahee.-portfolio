import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Hardcoded absolute paths of generated asset files
  const avatarImg = "/src/assets/images/mohamed_sahee_profile_custom_1783451346959.jpg";
  const royalImg = "/src/assets/images/royal_mens_wear_logo_1783450415153.jpg";
  const burgerImg = "/src/assets/images/delicious_burger_ad_1783450430011.jpg";
  const natureImg = "/src/assets/images/nature_herbal_product_1783450452558.jpg";
  const rideImg = "/src/assets/images/live_to_ride_poster_1783450467787.jpg";
  const letsTalkImg = "/src/assets/images/lets_talk_logo_1783452757224.jpg";
  const onSocialImg = "/src/assets/images/on_social_studio_logo_1783452772681.jpg";
  const koolfiImg = "/src/assets/images/koolfi_mahal_branding_1783452787565.jpg";
  const yummBakeryImg = "/src/assets/images/yumm_bakery_ad_1783453063683.jpg";
  const modernFurnitureImg = "/src/assets/images/modern_furniture_ad_1783453082622.jpg";
  const interiorDesignImg = "/src/assets/images/interior_design_ad_1783453100241.jpg";
  const coffeeShopImg = "/src/assets/images/coffee_shop_ad_1783453354203.jpg";
  const refinedHiringImg = "/src/assets/images/hiring_refinedng_ad_1783453374325.jpg";
  const chocoRettoImg = "/src/assets/images/choco_retto_packaging_1783453829102.jpg";
  const ayuLotionImg = "/src/assets/images/ayu_lotion_packaging_1783453849418.jpg";
  const limeFreshImg = "/src/assets/images/lime_fresh_packaging_1783453869167.jpg";
  const limonazoJuiceImg = "/src/assets/images/limonazo_juice_packaging_1783453882550.jpg";

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger accuracy
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-[#f5f5f5] selection:bg-gold-500 selection:text-black font-sans antialiased">
      {/* Sticky Header Nav */}
      <Header activeSection={activeSection} />

      <main className="flex-grow">
        {/* Full-screen Hero Section */}
        <Hero avatarImg={avatarImg} />

        {/* Detailed Professional About Section */}
        <About />

        {/* Visual Skills Section */}
        <Skills />

        {/* Portfolio Projects Section */}
        <Projects
          avatarImg={avatarImg}
          royalImg={royalImg}
          burgerImg={burgerImg}
          natureImg={natureImg}
          rideImg={rideImg}
          letsTalkImg={letsTalkImg}
          onSocialImg={onSocialImg}
          koolfiImg={koolfiImg}
          yummBakeryImg={yummBakeryImg}
          modernFurnitureImg={modernFurnitureImg}
          interiorDesignImg={interiorDesignImg}
          coffeeShopImg={coffeeShopImg}
          refinedHiringImg={refinedHiringImg}
          chocoRettoImg={chocoRettoImg}
          ayuLotionImg={ayuLotionImg}
          limeFreshImg={limeFreshImg}
          limonazoJuiceImg={limonazoJuiceImg}
        />

        {/* Timeline Education & Experience Section */}
        <Experience />

        {/* Secure Contact Section with Inbox */}
        <Contact />
      </main>

      {/* Handcrafted Footer Section */}
      <Footer />
    </div>
  );
}
