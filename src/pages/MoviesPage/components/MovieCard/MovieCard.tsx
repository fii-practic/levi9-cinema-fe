import { Card, Tooltip } from "antd";
import Meta from "antd/lib/card/Meta";
import Movie from "./../../../../types/movie";
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import styles from "./MovieCard.module.scss";
import MovieRating from "../MovieRating/MovieRating";
import useStore from "../../../../hooks/useStore";
import MovieState from "../../../../enums/movieState";
import { observer } from "mobx-react-lite";

const { poster, action, icon } = styles;

const MovieCard = ({
  movie,
  handleOnRatingChange,
  handleOnStateChange,
}: {
  movie: Movie;
  handleOnRatingChange: (rating: number) => void;
  handleOnStateChange: (movieState: MovieState) => void;
}) => {
  const { rating, title, url, state } = movie;
  const {
    upsertModalStore: { openUpdateModal },
    deleteModalStore: { openModal },
  } = useStore();

  const isSeen = state === MovieState.Seen;

  return (
    <Card
      hoverable
      size="small"
      cover={<img className={poster} alt={`${title} movie poster`} src={url} />}
      actions={[
        <EditOutlined key="edit" onClick={() => openUpdateModal(movie)} />,
        <DeleteOutlined key="delete" onClick={() => openModal(movie)} />,
        <p className={action}>
          {isSeen && (
            <Tooltip title="Seen">
              <EyeOutlined
                className={icon}
                key="status"
                onClick={() => handleOnStateChange(MovieState.Wishlist)}
              />
            </Tooltip>
          )}
          {!isSeen && (
            <Tooltip title="In whish list">
              <EyeInvisibleOutlined
                className={icon}
                key="status"
                onClick={() => handleOnStateChange(MovieState.Seen)}
              />
            </Tooltip>
          )}
        </p>,
      ]}
    >
      <Meta
        title={title}
        description={
          <MovieRating
            rating={rating}
            handleOnRatingChange={handleOnRatingChange}
          />
        }
      />
    </Card>
  );
};

export default observer(MovieCard);
