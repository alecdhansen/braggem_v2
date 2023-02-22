import "./UserInfo.css";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { handleError } from "../../utils";
//npm
import moment from "moment";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import {
  AvatarBox,
  AvatarSection,
  BackButton,
  BackButtonContainer,
  ImageContainer,
  LandscapeContainer,
  TeamImage,
  UserBoxContainer,
  UserImage,
} from "./style";
import { favoriteTeam } from "./utils";
// React Icons
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const UserInfo = () => {
  const { user }: any = useAuth();
  const [userData, setUserData] = useState(Object);
  const [lifetimePicks, setLifetimePicks] = useState([]);
  const navigate = useNavigate();
  let { username } = useParams();

  const day = new Date();
  const today = moment(day).format("YYYY-MM-DD");

  useEffect(() => {
    getUserData();
    getLifetimePicks();
  }, []);

  const getUserData = async () => {
    const response = await fetch(`/api_v1/user/profile/${username}/`).catch(
      handleError
    );
    if (!response) {
      throw new Error("Network response not OK");
    } else {
      const data = await response.json();
      setUserData(data[0]);
    }
  };

  const getLifetimePicks = async () => {
    const response = await fetch(`/api_v1/picks/lifetime/${username}`).catch(
      handleError
    );
    if (!response) {
      throw new Error("Network response not OK");
    } else {
      const data = await response.json();
      setLifetimePicks(data);
    }
  };
  const getOccurrence = (array: any, value: any) => {
    return array.filter((v: any) => v === value).length;
  };
  const lifetimeWinLoss = lifetimePicks.map((pick: any) => pick.is_correct);
  const lifetimeCorrectGuesses = getOccurrence(lifetimeWinLoss, true);
  const lifetimeIncorrectGuesses = getOccurrence(lifetimeWinLoss, false);
  const lifetimeTotalGuesses =
    lifetimeCorrectGuesses + lifetimeIncorrectGuesses;
  const lifetimeGuessPercentage = (
    (lifetimeCorrectGuesses / lifetimeTotalGuesses) *
    100
  ).toFixed(0);

  const initialSignUpDate = userData?.date_joined;
  const dateJoined = moment(initialSignUpDate).format("MMM YYYY");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("challenger", user.user);
    formData.append("opponent", userData.user);
    formData.append("date", today);
    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };
    const response = await fetch("/api_v1/challenges/", options).catch(
      handleError
    );
    if (!response) {
      throw new Error("Network response was not OK");
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: `You challenged ${username}!`,
    });
    navigate("/home/headtohead");
  };

  return (
    <>
      <BackButtonContainer>
        <Link to="/home/leaderboard/">
          <BackButton>
            <IoIosArrowBack /> Back to Leaderboard
          </BackButton>
        </Link>
      </BackButtonContainer>
      <UserBoxContainer>
        <LandscapeContainer
          background={`${favoriteTeam(userData?.favorite_team)}`}
        >
          <ImageContainer>
            <TeamImage
              src={require(`../../media/${userData?.favorite_team}.png`)}
              alt=""
            />
          </ImageContainer>
        </LandscapeContainer>
        <AvatarSection>
          <AvatarBox>
            <UserImage src={userData?.avatar} alt="" />
          </AvatarBox>
        </AvatarSection>
        <div className="usernameedit">
          <h4 className="username hello">{userData?.username}</h4>
        </div>
        <span className="datejoined dj2">User since {dateJoined}</span>
        <div className="mainstats">
          <div className="lifetime2">
            <h2 className="mystatsheader2">Lifetime Stats</h2>
            <div className="guesstitles row">
              <span className="spanlabels2 col-4">Correct Picks</span>
              <span className="spanlabels2 col-4">Games</span>
              <span className="spanlabels2 col-4">Percentage</span>
            </div>
            <div className="guessnumbers row">
              <span className="col-4">{lifetimeCorrectGuesses}</span>
              <span className="col-4">{lifetimeTotalGuesses}</span>
              <span className="col-4">{lifetimeGuessPercentage}%</span>
            </div>
          </div>
          <div>
            <Link to="/home/headtohead" className="challengelink">
              <button className="challengebtn" onClick={handleSubmit}>
                Challenge <MdOutlinePersonAddAlt />
              </button>
            </Link>
          </div>
        </div>
      </UserBoxContainer>
    </>
  );
};
export default UserInfo;
