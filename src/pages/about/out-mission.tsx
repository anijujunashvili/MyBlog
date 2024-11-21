const OurMission = () => {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="text-mutedForeground">
          At MyBlog, we believe in the power of shared knowledge. Our mission is
          to create a platform where tech enthusiasts, developers, and
          innovators can come together to share ideas, learn from each other,
          and push the boundaries of what's possible in the world of technology.
        </p>
      </div>
      <div className="relative h-64 md:h-full">
        <img
          src="https://img.freepik.com/premium-photo/businessman-holding-our-mission-text_220873-4286.jpg"
          alt="Team collaboration"
        />
      </div>
    </div>
  );
};

export default OurMission;
