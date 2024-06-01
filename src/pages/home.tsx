import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFour from "../layout/headers/header-four";
import HeroBannerFive from "../components/hero-banner/hero-banner-five";
import AboutTwo from "../components/about/about-two";
import PortfolioFive from "../components/portfolio/portfolio-five";
import VideoArea from "../components/video/video-area";
import BlogOne from "../components/blog/blog-one";
import FooterOne from "../layout/footer/footer-one";
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

    
      {/* portfolio area */}
      <PortfolioFive />
      {/* portfolio area */}
      
      {/* about area */}
      <AboutTwo />
      {/* about area */}




      {/* video area */}
      <VideoArea />
      {/* video area */}

      {/* blog area */}
      <BlogOne style_3={true} />
      {/* blog area */}


      {/* footer area */}
      <FooterOne />
      {/* footer area */}
    </Wrapper>
  )
}