import Learn from "@/app/(tabs)/learn";
import { render } from "@testing-library/react-native";

describe("Learn", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Learn />);

    getByText("Home");
  });
});
