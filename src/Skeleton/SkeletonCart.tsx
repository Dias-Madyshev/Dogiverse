import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={480}
    viewBox="0 0 360 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="35" y="382" rx="0" ry="0" width="1" height="0" />
    <rect x="19" y="8" rx="17" ry="17" width="330" height="260" />
    <rect x="46" y="318" rx="4" ry="4" width="150" height="22" />
    <rect x="45" y="279" rx="4" ry="4" width="230" height="20" />
    <rect x="45" y="357" rx="15" ry="15" width="250" height="72" />
    <rect x="107" y="444" rx="17" ry="17" width="150" height="30" />
  </ContentLoader>
);

export default MyLoader;
