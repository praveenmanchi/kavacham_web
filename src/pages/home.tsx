import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFour from "../layout/headers/header-four";
import HeroBannerFive from "../components/hero-banner/hero-banner-five";
import AboutTwo from "../components/about/about-two";
import PortfolioFour from "../components/portfolio/portfolio-four";
import VideoArea from "../components/video/video-area";
import BlogOne from "../components/blog/blog-one";
import FooterOne from "../layout/footer/footer-one";
import CtaOne from '../components/cta/cta-one';
import FeatureSix from "../components/features/feature-six";




export default function HomeFive() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home" />
      {/* seo title */}

      
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerFive />
      {/* hero banner area end */}

      {/* feature area */}
      <FeatureSix />
      {/* feature area */}

      {/* about area */}
      <AboutTwo />
      {/* about area */}

      {/* portfolio area */}
      <PortfolioFour />
      {/* portfolio area */}



      {/* video area */}
      <VideoArea />
      {/* video area */}

      {/* blog area */}
      <BlogOne style_3={true} />
      {/* blog area */}

      {/* cta area */}
      <CtaOne/>
      {/* cta area */}

      {/* footer area */}
      <FooterOne />
      {/* footer area */}
    </Wrapper>
  )
}