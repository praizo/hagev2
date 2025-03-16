const ServiceHeroSection = ({ data }) => {
  const {
    title,
    subtitle,
    buttonText,
    placeholderName,
    placeholderEmail,
    bgImage,
    badge,
  } = data;

  return (
    <div
      className="relative flex items-center justify-start px-6 md:pl-20 md:pb-20 md:pt-32 font-main "
      style={{ 
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center bottom", 
        backgroundRepeat: "no-repeat", 
        width: "100%", 
        height: "100%" // Ensures the div takes up space
      }}
          >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white-100 max-w-lg text-left ">
        {badge && (
          <span className="inline-block px-4 py-1 border border-white-100 rounded-full text-sm mb-6">
            Coming soon
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-bold md:leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-lg">{subtitle}</p>

        {/* Form */}
        <div className="flex flex-col">
          <div className="mt-6 flex flex-col md:flex-row  gap-3">
            <div className="flex-1">
              <label className="block text-sm font-light">First name</label>

              <input
                type="text"
                placeholder={placeholderName}
                className="w-full px-4 py-3 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-light">Email address</label>

              <input
                type="email"
                placeholder={placeholderEmail}
                className="w-full px-4 py-3 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>
          </div>

          {/* Conditionally Render the Button */}
          {buttonText && (
            <div>
              <button className="mt-4 w-full px-6 py-3 bg-secondary-200 text-white-100 font-medium rounded-md ">
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServiceHeroSection;
