import OurMission from "./out-mission.tsx";
import OurOffers from "./offers.tsx";
import OurStory from "./our-story.tsx";

export const AboutPage = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About MyBlog</h1>
          <p className="mt-4 text-xl text-mutedForeground">
            Empowering tech enthusiasts to share knowledge and inspire
            innovation.
          </p>
        </div>
        <OurMission />
        <OurOffers />
        <OurStory />
      </div>
    </>
  );
};
