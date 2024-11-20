import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <>
      <div className="rounded-lg bg-muted p-8">
        <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
        <p className="mb-4 text-mutedForeground">
          Founded in 2024, MyBlog started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="mb-4 text-mutedForeground">
          Today, MyBlog is proud to be a leading platform for technology-focused
          content, fostering innovation and collaboration in the ever-evolving
          world of tech.
        </p>
      </div>
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-semibold">Join Us on Our Journey</h2>
        <p className="mb-6 text-mutedForeground">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at MyBlog. Let's shape the future
          of technology together.
        </p>
        <Link to="/registration">
          <Button className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </Link>
      </div>
    </>
  );
};

export default OurStory;
