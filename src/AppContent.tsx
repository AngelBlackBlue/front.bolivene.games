import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import { Header } from "@/components/Header";
import Preloader from "./pages/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Profile from "@/pages/Profile";
import { AuthenticationGuard } from "./components/auth/AuthenticationGuard";
import Error from "@/pages/Error";
import { useAuth0 } from "@auth0/auth0-react";
import AboutUs from "./pages/AboutUs";
// import Test from "./pages/Test";

export const AppContent = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  return (
    <div className="relative ">
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route
              path="/profile"
              element={<AuthenticationGuard component={Profile} />}
            />
            <Route
              path="/callback"
              element={<AuthenticationGuard component={Preloader} />}
            />
            <Route path="/*" element={<Error />} />
            {/* <Route path="/test" element={<Test pageTitle="login" promptName="login"/>} /> */}
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

//import { Route, Routes } from "react-router-dom";
// import Home from "@/pages/Home";

// import { Header } from "@/components/Header";
// import Preloader from "./components/Preloader";
// // import { useEffect, useState } from "react";
// // import { Button } from "./components/ui/button";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import Profile from "./components/auth/profile";

// import { AuthenticationGuard } from "./components/auth/AuthenticationGuard";
// import Error from "@/pages/Error";
// import { useAuth0 } from "@auth0/auth0-react";

// export const AppContent = () => {
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 600);
//   // }, []);

//   const { isLoading } = useAuth0();

//   if (isLoading) {
//     return (
//       <div >
//         <Preloader />
//       </div>
//     );
//   }

//   return (
//     <div className="relative ">
//       {/* {loading ? (
//         <div className="relative">
//           <Button
//             className="absolute  z-10 bg-black text-white"
//             onClick={() => setLoading(false)}
//           >
//             Cancel Preloader
//           </Button>
//           <Preloader />
//         </div>
//       ) : ( */}
//         <div>
//           <Header />
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route
//                 path="/profile"
//                 element={<AuthenticationGuard component={Profile} />}
//               />

//               <Route path="/callback" element={<Preloader />} />
//               <Route path="/*" element={<Error />} />
//             </Routes>
//           </main>
//           <Footer />
//           <ScrollToTop />
//         </div>
//       {/* )} */}
//     </div>
//   );
// };
