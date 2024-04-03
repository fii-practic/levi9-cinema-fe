import { makeAutoObservable } from "mobx";
import Movie from "../../types/movie";
import Operations from "../../enums/operations";

class UpsertModalStore {
  public isVisible: boolean = false;
  public isLoading: boolean = false;
  public movie: Movie | undefined = undefined;
  public operation: Operations = Operations.Add;

  constructor() {
    makeAutoObservable(this);
  }

  public openUpdateModal = (movie: Movie) => {
    this.isVisible = true;
    this.movie = movie;
    this.operation = Operations.Update;
  }

  public openAddModal = () => {
    this.isVisible = true;
    this.operation = Operations.Add
  }

  public closeModal = () => {
    this.isVisible = false;
    this.movie = undefined;
  }
}

export default UpsertModalStore;
