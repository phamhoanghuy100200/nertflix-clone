import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: "/"
    }
});

export const config = {
    matcher: [

        "/profiles/:path*",
        "/home/:path*",
        "/movie/:path*"
    ]
}