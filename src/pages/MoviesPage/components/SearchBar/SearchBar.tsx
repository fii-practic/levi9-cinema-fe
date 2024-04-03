import { AutoComplete } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useStore from "../../../../hooks/useStore";
import AutoCompleteOption from "../../../../types/autocompleteOption";
import styles from "./SearchBar.module.scss";

const { input } = styles;

const SearchBar = ({
  onTitleSearch,
}: {
  onTitleSearch: (title: string) => void;
}) => {
  const {
    moviesStore: { movieTitles },
  } = useStore();
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>("");

  const optionsSnapshot =
    movieTitles.map((title) => ({
      value: title,
    })) || [];

  useEffect(() => {
    setOptions([...optionsSnapshot.map((x) => ({ ...x }))]);

    const title = searchParams.get("title");
    if (title) {
      setValue(title);
      onTitleSearch(title);
    }

  }, [movieTitles]);

  const onSearch = (searchText: string) => {
    setOptions(optionsSnapshot);

    if (!searchText) {
      setOptions(optionsSnapshot);
      return;
    }

    const possibleMatches = options.filter((title) =>
      title.value.toLocaleLowerCase().includes(searchText)
    );

    if (!possibleMatches || possibleMatches.length === 0) {
      return;
    }

    setOptions(possibleMatches);
  };

  const onChange = (searchText: string) => {
    setValue(searchText);
    onTitleSearch(searchText);
  };

  return (
    <AutoComplete
      dropdownClassName="moviesDropdown"
      dropdownMatchSelectWidth={500}
      className={input}
      options={options}
      value={value}
      onSearch={onSearch}
      onChange={(text) => onChange(text)}
      placeholder="Search movie"
    />
  );
};

export default observer(SearchBar);
