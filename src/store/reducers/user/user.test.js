
import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

it(`Reducer should requireAuthorization`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    email: ``,
  });
});

it(`Reducer should getUserEmail`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }, {
    type: ActionType.GET_USER_EMAIL,
    payload: {
      "avatar_url": `img/1.png`,
      "email": `Oliver.conner@gmail.com`,
      "id": 1,
      "is_pro": false,
      "name": `Oliver.conner`
    },
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: `Oliver.conner@gmail.com`,
  });
});
