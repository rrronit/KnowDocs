import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:["/","/signup","/signin"]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 