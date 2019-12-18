import BaseService from "./BaseService";

class FilterService extends BaseService {
  searchUser(query) {
    return this.apiGet({
      url: `/users/search/${query}`,
    });
  }
  getAllLocations() {
    return this.apiGet({
      url: `/employees/filter/locations`,
    });
  }
  getAllDepartments() {
    return this.apiGet({
      url: `/employees/filter/departments`,
    });
  }
  getAllJobs() {
    return this.apiGet({
      url: `/employees/filter/jobs`,
    });
  }
  getFilters() {
    return this.apiGet({
      url: `/employees/filters`,
    });
  }
  getFilterBy(location = false, departments = false, jobs = false) {
    let qs = "";
    if (location) {
      qs += "locations=true";
    }
    if (departments) {
      qs += `${qs !== "" ? "&" : ""}departments=true`;
    }

    if (jobs) {
      qs += `${qs !== "" ? "&" : ""}jobs=true`;
    }
    return this.apiGet({
      url: `/employees/filterBy?${qs}`,
    });
  }
}

export default new FilterService();
