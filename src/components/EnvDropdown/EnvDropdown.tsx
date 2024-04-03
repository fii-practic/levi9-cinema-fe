import { Select } from "antd";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";

const { Option } = Select;

const EnvDropdown = ({
  handleOnChange,
}: {
  handleOnChange: (environment: string) => void;
}) => {
  const {
    utilsStore: { selectedEnvironment, setEnvironment, environments },
  } = useStore();

  const onSelect = (value: string) => {
    setEnvironment(value);
    handleOnChange(value);
  };

  const getDefaultValue = () => {
    const cachedEnv = localStorage.getItem("environment");

    return cachedEnv ? cachedEnv : selectedEnvironment || environments[0];
  };

  return (
    <Select
      defaultValue={getDefaultValue()}
      style={{ width: 120 }}
      onSelect={onSelect}
    >
      {environments.map((env) => (
        <Option key={env}>{env}</Option>
      ))}
    </Select>
  );
};

export default observer(EnvDropdown);
