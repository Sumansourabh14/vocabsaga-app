import Search from "@/app/(tabs)/search";
import { fireEvent, render } from "@testing-library/react-native";

describe("Search", () => {
  it("displays title", () => {
    const { getByText } = render(<Search />);
    getByText("Find a word");
  });

  it("all fields available on the screen", () => {
    const { getByTestId } = render(<Search />);

    expect(getByTestId("word-input")).toBeOnTheScreen();
    expect(getByTestId("search-btn")).toBeOnTheScreen();
  });

  it("input field updation", () => {
    const { getByTestId } = render(<Search />);
    const wordInput = getByTestId("word-input");

    fireEvent.changeText(wordInput, "test");

    expect(wordInput.props.value).toBe("test");
  });

  it("shows reset button when input has text", () => {
    const { getByTestId, queryByTestId } = render(<Search />);
    const wordInput = getByTestId("word-input");

    expect(queryByTestId("reset-input")).toBeNull();

    fireEvent.changeText(wordInput, "word");
    expect(getByTestId("reset-input")).toBeOnTheScreen();
  });

  it("reset button clears input when pressed and hides again", () => {
    const { getByTestId, queryByTestId } = render(<Search />);

    const wordInput = getByTestId("word-input");
    fireEvent.changeText(wordInput, "word");

    const resetButton = getByTestId("reset-input");
    fireEvent.press(resetButton);

    expect(wordInput.props.value).toBe("");
    expect(queryByTestId("reset-input")).toBeNull();
  });

  it("disables search button when input is empty", () => {
    const { getByTestId } = render(<Search />);
    const searchBtn = getByTestId("search-btn");

    expect(searchBtn).toBeDisabled();
  });
});
