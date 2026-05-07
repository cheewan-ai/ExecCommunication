import { redirect } from "next/navigation";

export default function HomePage() {
  // Root → login. Auth state lives in localStorage; the login page redirects to /app/welcome
  // for a signed-in user.
  redirect("/login");
}
