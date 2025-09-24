import About from "@/app/(tabs)/about";
import { render } from "@testing-library/react-native";

jest.mock("@/app.json", () => ({
  expo: { version: "__TEST-VERSION__" },
}));

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

  it("displays version from app.json file", () => {
    const { getByText } = render(<About />);

    const versionText = getByText(`Version __TEST-VERSION__`);
    expect(versionText).toBeOnTheScreen();
  });
});
