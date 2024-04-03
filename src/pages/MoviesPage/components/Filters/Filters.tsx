import { Radio, Tooltip, Button } from "antd";
import MovieState from "../../../../enums/movieState";
import SearchBar from "../SearchBar/SearchBar";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./Filters.module.scss";

const { radioButtons, searchButton } = styles;
const { Group } = Radio;

const Filters = ({
  searchParams,
  onRadioChange,
  onTitleSearch,
  onClick,
}: {
  searchParams: URLSearchParams;
  onRadioChange: (e: any) => void;
  onTitleSearch: (title: string) => void;
  onClick: () => void;
}) => {
  const getDefaultValue = () => {
    const state = searchParams.get("state");

    if (!state) {
      return MovieState.None;
    }

    return MovieState[state as keyof typeof MovieState];
  };

  return (
    <div>
      <h2>Looking for something specific?</h2>
      <SearchBar onTitleSearch={onTitleSearch} />
      <Group
        onChange={onRadioChange}
        defaultValue={getDefaultValue}
        className={radioButtons}
      >
        <Radio.Button value={MovieState.None} key="radio1">
          All
        </Radio.Button>
        <Radio.Button value={MovieState.Wishlist} key="radio2">
          {MovieState[MovieState.Wishlist]}
        </Radio.Button>
        <Radio.Button value={MovieState.Seen} key="radio3">
          {MovieState[MovieState.Seen]}
        </Radio.Button>
      </Group>
      <Tooltip title="Search" className={searchButton}>
        <Button
          shape="circle"
          type="dashed"
          icon={<SearchOutlined />}
          color=""
          onClick={onClick}
        />
      </Tooltip>
    </div>
  );
};

export default Filters;
