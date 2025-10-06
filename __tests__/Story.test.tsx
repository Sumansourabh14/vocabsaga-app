import Story from "@/app/story";
import { fireEvent, render } from "@testing-library/react-native";

describe("Story", () => {
  it("opens modal and shows 'See more'", async () => {
    const { getByTestId, findByText } = render(<Story />);

    const eyeButton = getByTestId("eye-btn");
    fireEvent.press(eyeButton);

    const seeMore = await findByText("See more");
    expect(seeMore).toBeTruthy();
  });
});
