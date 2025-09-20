import TopBanner from "../components/TopBanner";
import NormalButton from "../components/NormalButton";

function LandingPage() {
  return (
    <div>
      <TopBanner
        title="Vic3Pop.me"
        description="If you lived in the Victorian Era, which pop would you be?"
        backgroundImageUrl="src/assets/imgs/landing-vic.jpg"
      />
      <NormalButton
        onClick={() => {
          window.location.href = "/form";
        }}
      >
        Get Started
      </NormalButton>
    </div>
  );
}

export default LandingPage;
