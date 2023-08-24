export default class InfoCityView {
    constructor(element, infoCityModel) {
      this.element = element;
      this.model = infoCityModel;
      this.city = infoCityModel.cityDescription;
      this.date = infoCityModel.dateDescription;
    }
  
    get city() {
      return this.element.querySelector("h1");
    }
  
    set city(value) {
      this.city.textContent = value;
    }
  
    get date() {
      return this.element.querySelector("h2");
    }
  
    set date(value) {
      this.date.textContent = value;
    }
  }