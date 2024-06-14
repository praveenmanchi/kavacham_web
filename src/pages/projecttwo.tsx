import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterOne from "../layout/footer/footer-one";
import MarqueeSlider from "../components/marquee-slider";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ServiceDetailsArea from "../components/service/service-details-area";


export default function ProjectTwoPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Project two" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbTwo title="Services" subtitle="Project Two" />
      {/* breadcrumb end */}

      {/* service details area */}
      <ServiceDetailsArea />
      {/* service details area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterOne />
      {/* footer area */}
    </Wrapper>
  )
}