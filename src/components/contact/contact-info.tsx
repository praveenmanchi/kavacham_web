import { NavLink } from "react-router-dom";
import posthog from 'posthog-js';

const contactInfo = [
  {
    iconSrc: "/assets/img/icon/location-pin-alt.svg",
    title: "Headquarters",
    address: "Plot no.9, Masijid banda,",
    city: "Hyderabad, India 50084",
    linkUrl: "https://maps.google.com",
    linkText: "Get direction",
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "Email Address",
    email: "contact@kavacham.tech",
    email2: "sales@kavacham.tech",
    linkUrl: "mailto:contact@kavacham.tech",
    linkText: "Send message",
  },
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Phone Number",
    phoneNumber1: "+91 829 798 7394",
    phoneNumber2: "+91 944 025 2585",
    linkUrl: "tel:8297987394",
    linkText: "Call anytime",
  },
];

const ContactInfo = () => {
  const handleContactClick = (contactTitle: string) => {
    posthog.capture('contact_clicked', {
      contact_title: contactTitle,
    });
  };

  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactInfo.map((info, i) => (
            <div className="col-xl-4 col-md-6">
              <div key={i} className="feature-card">
                <div className="feature-card-icon">
                  <img src={info.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <NavLink to="/project" onClick={() => handleContactClick(info.title)}>{info.title}</NavLink>
                  </h4>
                  {info.address && (
                    <p className="feature-card-text mb-0">{info.address}</p>
                  )}
                  {info.city && (
                    <p className="feature-card-text">{info.city}</p>
                  )}
                  {info.email && (
                    <p className="feature-card-text mb-0">{info.email}</p>
                  )}
                  {info.email2 && (
                    <p className="feature-card-text">{info.email2}</p>
                  )}
                  {info.phoneNumber1 && (
                    <p className="feature-card-text mb-0">
                      {info.phoneNumber1}
                    </p>
                  )}
                  {info.phoneNumber2 && (
                    <p className="feature-card-text">{info.phoneNumber2}</p>
                  )}
                  <a href={info.linkUrl} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">{info.linkText}</span>
                      <span className="effect-1">{info.linkText}</span>
                    </span>
                    <img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;