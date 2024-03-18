import { render } from "@testing-library/react";
import App from "../App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

test("renders the component with the correct name passed as prop", () => {
  const initialState = {
    name: "",
    surname: "",
    gender: "",
    dateOfBirth: "",
    planCode: "",
    premiumPerYear: 0,
    paymentFrequency: "",
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const textElement = getByText(/Name:/i);
  expect(textElement).toBeInTheDocument();
});
