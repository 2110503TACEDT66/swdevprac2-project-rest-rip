import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/(workingSpaceinfo)/workinngSpace/[wid]/page";
import getWorkingSpaces from "@/libs/getWorkingSpaces";
import { Suspense } from "react";
import { userEvent } from "@testing-library/user-event";
import NextAuth, { Session, getServerSession } from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SessionProvider } from "next-auth/react";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";

const mockResult = {
  "success": true,
  "data": {
    "_id": "660129f2248149607426ecdf",
    "name": "KLOUD by KBunk",
    "address": "430, 6-10 Rama I Rd",
    "district": "Khwaeng Pathum Wan",
    "province": "Bangkok",
    "postalcode": "10330",
    "tel": "02-8369999",
    "region": "กรุงเทพมหานคร (Bangkok)",
    "picture": "https://assets.brandinside.asia/uploads/2022/07/DSC01993-scaled.jpg",
    "__v": 0,
    "id": "660129f2248149607426ecdf"
  }
}

describe("/workingSpace/wid page", () => {

  var logInPromise: Promise<Object>;
  var logInJsonResult: any;
  var token: string;
  var profilePromise: Promise<Object>;
  var profileJsonResult: Object;

  beforeAll(async () => {
    const email = "test@test.com";
    const password = "123456";
    logInPromise = userLogIn(email, password);
    logInJsonResult = await logInPromise;

    token = logInJsonResult.token;
    profilePromise = getUserProfile(token);
    profileJsonResult = await profilePromise;
  })


  it("Should contain WorkingSpace detail", async () => {
    await render(
      <Suspense fallback={<div>Loading...</div>}>
        <Page params={{ wid: mockResult.data._id }} />
      </Suspense>
    );
    const workingSpaceName = (await screen.findByText(
      "KLOUD by KBunk"
    )) as HTMLHeadingElement;

    expect(workingSpaceName).toBeInTheDocument();
    expect(workingSpaceName.textContent).toBe(mockResult.data.name);
  });

  it("Authorize User make Reservation", async () => {
    jest.mock("../src/components/PopCard.tsx");
    jest.mock("../src/components/ErrorModal.tsx");
    jest.mock("next-auth/react", () => ({
      useSession() {
        return { data: null, user: { name: "Tester" } };
      }
    }))

    let session: Session = {
      user: {
        _id: "66006f71677d5978cea73782",
        name: "Test",
        email: "",
        role: "",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDA2ZjcxNjc3ZDU5NzhjZWE3Mzc4MiIsImlhdCI6MTcxMTczOTQxNCwiZXhwIjoxNzE0MzMxNDE0fQ.0e0lfhLylRgnIB0sM4ohQPcp7EwZLmzAvYZyUbGiKDk",
      },

      expires: "2028-12-31"
    }

    await render(
      <SessionProvider session={session}>
        <Suspense fallback={<div>Loading...</div>}>
          <Page params={{ wid: mockResult.data._id }} />
        </Suspense>
      </SessionProvider>
    );

    const btn = await screen.findByText("Make Reservation")
    userEvent.click(btn);
    await waitFor(async () => {
      const popCard = await screen.findByTestId("pop-card");
      expect(popCard).toBeInTheDocument()
    })
  });

  it("Unauthorize User make Reservation", async () => {
    jest.mock("../src/components/PopCard.tsx");
    jest.mock("../src/components/ErrorModal.tsx");
    jest.mock("next-auth/react", () => ({
      useSession() {
        return { data: null, user: { name: "Tester" } };
      }
    }))

    await render(
      <SessionProvider session={null}>
        <Suspense fallback={<div>Loading...</div>}>
          <Page params={{ wid: mockResult.data._id }} />
        </Suspense>
      </SessionProvider>
    );

    const btn = await screen.findByText("Make Reservation")
    userEvent.click(btn);
    await waitFor(async () => {
      const errModal = await screen.findByTestId("err-modal");
      expect(errModal).toBeInTheDocument();
    })
  });

});
