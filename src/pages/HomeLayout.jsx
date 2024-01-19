import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPangeLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPangeLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
