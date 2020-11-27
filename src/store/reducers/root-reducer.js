import {combineReducers} from "redux";
import {applicationState} from "./application-state/application-state";
import {applicationData} from "./application-data/application-data";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [NameSpace.DATA]: applicationData,
  [NameSpace.STATE]: applicationState,
});
