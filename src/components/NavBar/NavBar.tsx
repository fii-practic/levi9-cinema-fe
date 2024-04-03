import { Header } from "antd/lib/layout/layout";
import PopcornIcon from "../../assets/images/popcorn.png";
import EnvDropdown from "../EnvDropdown/EnvDropdown";
import useStore from "../../hooks/useStore";
import styles from "./NavBar.module.scss";

const { brand, titleIcon, header, title, envContainer } = styles;

const NavBar = () => {
  const {
    utilsStore: { setEnvironment },
  } = useStore();

  const handleOnChange = (environment: string) => {
    setEnvironment(environment);
    localStorage.setItem("environment", environment);
  };

  return (
    <Header className={header}>
      <div className={brand}>
        <img src={PopcornIcon} alt="popcorn icon" className={titleIcon} />
        <p className={title}>Levi9 Cinema</p>
      </div>
      <div className={envContainer}>
        <p>Environment: </p>
        <EnvDropdown handleOnChange={handleOnChange} />
      </div>
    </Header>
  );
};

export default NavBar;
