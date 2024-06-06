import Marquee from "react-fast-marquee";

export default function MarqueeSlider() {
  const marQueeData = [
    {
      id: 1,
      href: "#",
      text: "Defending Tomorrow with Today's Technology",
      icon: "fas fa-star-of-life",
    },
    {
      id: 2,
      href: "#",
      text: "Innovative Defense for a Safer Future",
      icon: "fas fa-star-of-life",
    },
    {
      id: 3,
      href: "#",
      text: "Advanced Security Solutions for Modern Threats",
      icon: "fas fa-star-of-life",
    },
    {
      id: 4,
      href: "#",
      text: "State-of-the-Art Defense: Where Safety Meets Innovation",
      icon: "fas fa-star-of-life",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeData.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
