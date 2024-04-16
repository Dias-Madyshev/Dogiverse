import ContentLoader from "react-content-loader";

const FactLoader = () => (
  <ContentLoader
    speed={2}
    width={1300}
    height={100}
    viewBox="0 0 1300 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="35" y="382" rx="0" ry="0" width="1" height="0" />
    <rect x="157" y="189" rx="0" ry="0" width="1" height="0" />
    <rect x="38" y="170" rx="0" ry="0" width="140" height="37" />
    <rect x="145" y="188" rx="0" ry="0" width="2" height="0" />
    <rect x="106" y="21" rx="0" ry="0" width="0" height="3" />
    <rect x="-215" y="23" rx="0" ry="0" width="1200" height="60" />
  </ContentLoader>
);

export default FactLoader;
