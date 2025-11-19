//! show all project
// export const middleware = async () => {
//     console.log("Hello from middleware")
// };
//! show specific file
// export const config = {
//     matcher: ["/about"],
// }

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };