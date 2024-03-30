// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import TopMenu from '@/components/TopMenu';
// import { SessionProvider, useSession } from "next-auth/react";
// import { Session } from "next-auth";
// import userLogIn from "@/libs/userLogIn";
// import getUserProfile from "@/libs/getUserProfile";
// import Banner from '@/components/Banner';




// describe('TopMenu', () => {

//     var logInPromise: Promise<Object>;
//     var logInJsonResult: any;
//     var token: string;
//     var profilePromise: Promise<Object>;
//     var profileJsonResult: Object;

//     beforeAll(async () => {
//         const email = "test@test.com";
//         const password = "123456";
//         logInPromise = userLogIn(email, password);
//         logInJsonResult = await logInPromise;

//         token = logInJsonResult.token;
//         profilePromise = getUserProfile(token);
//         profileJsonResult = await profilePromise;
//     })

//     it('renders sign-in and sign-up links when there is no session', async () => {
//         jest.mock("../src/components/topMenu.tsx");
//         jest.mock("next-auth/react", () => ({
//             useSession() {
//                 return { data: null, user: { name: "Tester" } };
//             }
//         }))

//         await render(
//             <SessionProvider session={null}>
//                 <TopMenu />
//             </SessionProvider>
//         );

//         expect(screen.getByText('Sign-In')).toBeInTheDocument();
//         expect(screen.getByText('Sign-Up')).toBeInTheDocument();
//         expect(screen.queryByText('Sign-Out')).not.toBeInTheDocument();
//     });

//     it('renders sign-out link and user name when there is a session', async () => {
//         jest.mock("../src/components/topMenu.tsx");
//         jest.mock("next-auth/react", () => ({
//             useSession() {
//                 return { data: null, user: { name: "Tester" } };
//             }
//         }))
//         jest.mock("next-auth/react", () => ({
//             getServerSession() {
//                 return { data: null, user: { name: "Tester" } };
//             }
//         }))


//         const session: Session = {
//             user: {
//                 _id: "66006f71677d5978cea73782",
//                 name: "test",
//                 email: "",
//                 role: "",
//                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDA2ZjcxNjc3ZDU5NzhjZWE3Mzc4MiIsImlhdCI6MTcxMTczOTQxNCwiZXhwIjoxNzE0MzMxNDE0fQ.0e0lfhLylRgnIB0sM4ohQPcp7EwZLmzAvYZyUbGiKDk",
//             },

//             expires: "2028-12-31"
//         }

//         await render(
//             <SessionProvider session={null}>
//                 <TopMenu />
//             </SessionProvider>
//         );


//         await waitFor(async () => {
//             expect(screen.getByText('Sign-Out test')).toBeInTheDocument();
//         });
//         expect(screen.queryByText('Sign-In')).not.toBeInTheDocument();
//         expect(screen.queryByText('Sign-Up')).not.toBeInTheDocument();
//     });


// });
