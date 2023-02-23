import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";

const UnprotectedLayout = () => {
  const { user }: any = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/home/games" replace />;
  }
  return (
    <div>
      <Header />
      {outlet}
    </div>
  );
};
export default UnprotectedLayout;
