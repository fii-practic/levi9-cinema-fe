import { makeAutoObservable } from "mobx";
import Movie from "../../types/movie";

class DeleteModalStore {
  public isVisible: boolean = false;
  public movie: Movie | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public openModal = (movie: Movie) => {
    this.isVisible = true;
    this.movie = movie;
    console.log(this.isVisible);
  };

  public closeModal = () => {
    this.isVisible = false;
  };
}

export default DeleteModalStore;
