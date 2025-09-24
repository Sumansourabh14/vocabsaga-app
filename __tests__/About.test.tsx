import About from "@/app/(tabs)/about";
import { render } from "@testing-library/react-native";

describe("About", () => {
  it("displays title and description without crashing", () => {
    const { getByText } = render(<About />);

    expect(getByText("About")).toBeOnTheScreen();
    expect(
      getByText(
        "Welcome to Vocabsaga, learn new words through passages, not random flashcards"
      )
    ).toBeOnTheScreen();
  });

  it("displays privacy and terms of use", () => {
    const { getByText } = render(<About />);

    expect(getByText("Privacy Policy")).toBeOnTheScreen();
    expect(getByText("Terms of Use")).toBeOnTheScreen();
  });
});
