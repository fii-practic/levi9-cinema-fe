import styles from "./LoginPage.module.scss";
import Levi9Logo from "../../assets/images/LeviNine_Logo.png";
import useStore from "./../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import EnvDropdown from "../../components/EnvDropdown/EnvDropdown";

const { container, title, envSelection } = styles;

const LoginPage = () => {
  const {
    utilsStore: { setEnvironment },
  } = useStore();
  const navigate = useNavigate();

  const handleOnChange = (environment: string) => {
    setEnvironment(environment);
    localStorage.setItem("environment", environment);
    navigate("/movies");
  };

  return (
    <div className={container}>
      <div className={title}>
        <img src={Levi9Logo} alt="logo" />
        <h1>Cinema!!!</h1>
      </div>
      <div className={envSelection}>
        <p>Backend API environment: </p>
        <EnvDropdown handleOnChange={handleOnChange} />
      </div>
    </div>
  );
};

export default observer(LoginPage);
