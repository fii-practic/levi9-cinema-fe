import { makeAutoObservable } from "mobx";

class UtilsStore {
  public environments = ["Docker", "Serverless"];

  constructor() {
    makeAutoObservable(this);
  }

  public selectedEnvironment: string = "";

  public setEnvironment = (environment: string) => {
    this.selectedEnvironment = environment;
  };

  // get environment() {
  //   const { _environment } = this;

  //   if (!_environment) {
  //     return _environment;
  //   }
  //   const envName = Environments[_environment];

  //   return envName.charAt(0).toUpperCase() + envName.slice(1);
  // }
}

export default UtilsStore;
