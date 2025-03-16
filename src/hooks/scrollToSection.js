const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const sectionPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  export default scrollToSection;
  