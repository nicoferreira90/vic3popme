import TopBanner from "../components/TopBanner";
import NormalButton from "../components/NormalButton";
import SideImage from "../components/SideImage";
import queenVic from '../assets/imgs/queen-vic.jpg';

function LandingPage() {
  return (
    <div>
      <TopBanner
        title="Vic3Pop.me"
        description="If you lived in the Victorian Era, which pop would you be?"
      />
      {/* Content below banner */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column: text + button */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4" style={{ fontFamily: "'Niconne', serif" }}>
              Discover Your Victorian Persona
            </h1>
            <p className="text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Rosarivo', serif" }}>
              Welcome to the Vic3Pop.me! 
              In a world defined by industrial progress, political reform, and social upheaval, every individual plays a unique role. Whether you're managing factories, organizing protests, or influencing policy from behind the scenes, your background and beliefs shape your place in society. 
              This quiz will help you discover which Pop type you belong to—like aristocrats, laborers, or academics—and which Interest Group you'd likely support, from industrialists to rural folk. Are you a voice for tradition or a force for change? Based on your preferences and worldview, we’ll place you where you truly belong in the shifting landscape of Victoria 3. 
              Time to find out!
            </p>
            <NormalButton
              onClick={() => {
                window.location.href = "/form";
              }}
            >
              Get Started
            </NormalButton>
          </div>

          {/* Right column: image */}
          <SideImage src={queenVic} alt="Victorian Era" />
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
