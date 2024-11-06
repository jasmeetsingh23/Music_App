// // import React from "react";

// // import "./Home.css";
// // import Header from "../../components/Header";
// // import Sidebar from "../../components/Sidebar";
// // import Footer from "../../components/Footer";

// // const Home = () => {
// //   return (
// //     <div className="app-container">
// //       <Header />
// //       <div className="content-container">
// //         <Sidebar />
// //         <main className="main-content">
// //           <h1>
// //             ..........................................................................................................Welcome
// //             to the Home Page
// //           </h1>
// //           <p>
// //             ................................................................................................................Main
// //             content goes here. It is scrollable and takes up the remaining
// //             space.
// //           </p>
// //           {/* Add your main content here */}
// //         </main>
// //       </div>
// //       <div className="main-content">
// //         {/* Your main application content goes here */}
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;

// // pages/Home/Home.js
// import React from "react";
// import "./Home.css";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
// import Footer from "../../components/Footer";
// import PersonalizedRecommendations from "../../components/PersonalizedRecommendations";
// import SuggestedContent from "../../components/SuggestedContent";
// import GenreAndMood from "../../components/GenreAndMood";
// import RecommendedArtists from "../../components/RecommendedArtists";

// const Home = () => {
//   return (
//     <div className="app-container">
//       <Header />
//       <div className="content-container">
//         <Sidebar />
//         <main className="main-content">
//           <PersonalizedRecommendations />
//           <SuggestedContent />
//           <GenreAndMood />
//           <RecommendedArtists />
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// pages/Home/Home.jsx
import React from "react";
import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PersonalizedRecommendations from "../../components/PersonalizedRecommendations";
import SuggestedContent from "../../components/SuggestedContent";
import GenreAndMood from "../../components/GenreAndMood";
import RecommendedArtists from "../../components/RecommendedArtists";

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        {/* Removed Sidebar */}
        <main className="main-content">
          <PersonalizedRecommendations />
          <SuggestedContent />
          <GenreAndMood />
          <RecommendedArtists />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
