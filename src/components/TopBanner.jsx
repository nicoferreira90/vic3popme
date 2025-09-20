
function TopBanner({ title, description, backgroundImageUrl = "assets/imgs/cover-image.png" }) {
  return (
        <div className="col-span-1 row-span-2 bg-contain relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          width: "100%", // Ensures the div spans the full width
          height: "30vw", // Sets the height to 30% of the viewport width
          backgroundSize: "cover"
        }}>
        {/* The content inside the div */}
        <div className="flex flex-col absolute inset-0 md:pt-2 lg:pt-3">
            {/* Title section */}
            <div className="flex flex-col justify-start items-start pl-4 md:pl-12 lg:pl-16 pt-8 md:pt-8 lg:pt-12" style={{ maxHeight: "200px" }}>
                <h1 className="text-white text-4xl md:text-5xl lg:text-8xl" style={{ fontFamily: "'Rosarivo', serif" }}>{title}</h1>
            </div>
        
            {/* Description section */}
            <div className="flex flex-col justify-start items-start pl-6 md:pl-12 lg:pl-16 sm:mt-2">
                <p className="text-white text-lg md:text-2xl lg:text-4xl hidden md:block" style={{ fontFamily: "'Rosarivo', serif" }}>
                    <b>{description}</b>
                </p>
            </div>
        </div>
    </div>
  );
}

export default TopBanner;