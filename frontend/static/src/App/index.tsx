import { useAuth } from "../hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "../navigation/ProtectedLayout";
// import Card from "../Card/Card";
import UnprotectedLayout from "../navigation/UnprotectedLayout";
import LoginScreen from "../components/LoginScreen";
import Fof from "../components/404Page";
// import Register from "../Login/Register";
// import ProfilePage from "../Profile/ProfilePage";
// import Leaderboard from "../Leaderboard/LeaderBoard";
// import HeadToHead from "../HeadToHead/HeadToHead";
import UserInfo from "../components/UserInfo";

const App = () => {
  const { user }: any = useAuth();

  return (
    <>
      <Routes>
        <Route element={<UnprotectedLayout />}>
          <Route path="/" element={<LoginScreen />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
        <Route path="/home" element={<ProtectedLayout />}>
          {/* <Route path="games" element={<Card />} />
          <Route path={user?.username} element={<ProfilePage />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="headtohead" element={<HeadToHead />} /> */}
          <Route path=":username" element={<UserInfo />} />
        </Route>
        <Route path="*" element={<Fof />} />
      </Routes>
    </>
  );
};

export default App;
