const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-accent font-body uppercase tracking-[0.25em] text-sm mb-2">Video</p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Baron Trenck in Action</h2>
        <div className="w-px h-8 bg-accent mx-auto mb-10" />
        <div className="flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fcamperandnicholsons%2Fvideos%2F271017995665489%2F&show_text=false&width=267&t=0"
            width="267"
            height="476"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Baron Trenck Video"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
