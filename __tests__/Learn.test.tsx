import Learn from "@/app/(tabs)/learn";
import { render } from "@testing-library/react-native";

describe("Learn", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Learn />);

    getByText("Learn words");
  });

  it("learn component snapshot", () => {
    const snapshot = render(<Learn />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
