import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - kavacham` : 'kavacham - Provide all digital service to flight in digital world and to protect service'}</title>
      <meta name="description" content="An Indian startup to provide all digital service to flight in digital world and to protect service" />
      <meta name="keywords" content="An Indian startup to provide all digital service to flight in digital world and to protect service" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;