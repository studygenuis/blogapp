import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials ?? {}

                const response = await fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                if (!response.ok) {
                    console.log("Failed to get die user")
                    return null
                }

                const user = await response.json()

                if (credentials.email === user.email && credentials.password === user.password) {
                    return user;
                }

                return null;
            },
        }),
    ],
    session: {
        jwt: true,
    },
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };