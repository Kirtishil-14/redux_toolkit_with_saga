import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";

function* workGetCatsFetch() {
  const cats = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/posts")
  );
  const formattedCat = yield cats.json();
  const formattedCatShortend = formattedCat.slice(0, 10);
  yield put(getCatsSuccess(formattedCatShortend));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
