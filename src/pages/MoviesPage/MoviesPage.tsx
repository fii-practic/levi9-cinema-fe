import { Row, Col, Button } from "antd";
import MovieCard from "./components/MovieCard/MovieCard";
import useStore from "../../hooks/useStore";
import MovieState from "../../enums/movieState";
import MovieFilters from "../../types/movieFilters";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Filters from "./components/Filters/Filters";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./MoviesPage.module.scss";
import UpsertModal from "./components/UpsertModal/UpsertModal";
import Movie from "../../types/movie";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal/DeleteConfirmationModal";
import { isVisible } from "@testing-library/user-event/dist/utils";

const { commands, cardContainer, filtersContainer } = styles;

const MoviesPage = () => {
  const {
    moviesStore: { movies, setMovies, getMovies },
    upsertModalStore: { openAddModal },
  } = useStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<MovieFilters>({
    title: "",
    state: MovieState.None,
  });

  useEffect(() => {
    const title = searchParams.get("title") as string;
    const state = searchParams.get("state") as string;

    getMovies(title, state);
  }, [searchParams]);

  const setRating = (movie: Movie, rating: number) => {
    movie.rating = rating;
    setMovies(movies);
  };

  const onRadioChange = (e: any) => {
    const value = e?.target?.value;

    setFilters({
      ...filters,
      state: value as MovieState,
    });
  };

  const onTitleSearch = (title: string) => {
    setFilters({
      ...filters,
      title,
    });
  };

  const onClick = () => {
    const { title, state } = filters;

    const isTitleValid = title && title !== "";
    const isStateValid = state !== MovieState.None;

    const titleParam = searchParams.get("title") as string;
    const stateParam = searchParams.get("state") as string;

    if (!(isTitleValid || isStateValid || titleParam || stateParam)) {
      return;
    }

    const queryParams = {} as any;
    if (isTitleValid) {
      queryParams.title = title;
    } else {
      delete queryParams.title;
    }

    if (isStateValid) {
      queryParams.state = MovieState[state];
    } else {
      delete queryParams.state;
    }

    setSearchParams(queryParams);
  };

  const setMovieState = (movie: Movie, movieState: MovieState) => {
    movie.state = movieState;
    setMovies(movies);
  };

  // const handleModalSubmission = (movie: Movie) => {
  //   if (modalOperation === ModalOperations.Add) {
  //     movies.push(movie);
  //   } else {
  //     const existingMovie = movies.find((x) => x.id === movie.id);
  //     const index = movies.indexOf(existingMovie as Movie);
  //     movies[index] = movie;
  //   }

  //   setMovies(movies);
  // };

  return (
    <>
      <div className={commands}>
        <div className={filtersContainer}>
          <Filters
            searchParams={searchParams}
            onRadioChange={onRadioChange}
            onTitleSearch={onTitleSearch}
            onClick={onClick}
          />
        </div>

        <Button type="primary" icon={<PlusOutlined />} onClick={openAddModal}>
          Add movie
        </Button>
      </div>

      <Row gutter={[40, 40]}>
        {movies?.map((movie, index) => {
          return (
            <Col span={6}>
              <div className={cardContainer}>
                <MovieCard
                  key={`movie${index}`}
                  movie={movie}
                  handleOnRatingChange={(rating: number) =>
                    setRating(movie, rating)
                  }
                  handleOnStateChange={(movieState: MovieState) =>
                    setMovieState(movie, movieState)
                  }
                />
              </div>
            </Col>
          );
        })}
      </Row>

      <UpsertModal key="upsertModal" />
      <DeleteConfirmationModal key="deleteModal" />
    </>
  );
};

export default observer(MoviesPage);
