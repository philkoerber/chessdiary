import NextAuth from "next-auth/next";

const lichessHost = "https://lichess.org";
const scope = "email:read";


export const authOptions = ({
  debug: true,
  providers: [
    {
      id: "lichess",
      name: "Lichess",
      type: "oauth",
      clientId: "client-id-test",
      clientSecret: process.env.NEXTAUTH_SECRET,
      authorization: {
        url: `${lichessHost}/oauth`,
          params: { scope },
      },
      token: `${lichessHost}/api/token`,
      userinfo: `${lichessHost}/api/account`,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.id,
          username: profile.username,
        };
      },
    },
  ],
});

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}