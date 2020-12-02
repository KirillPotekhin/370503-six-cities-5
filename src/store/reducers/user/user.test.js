
import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../../const";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {checkAuth, login} from "../../api-actions";

const api = createAPI(() => {});

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const offersLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });

      });
  });

});
