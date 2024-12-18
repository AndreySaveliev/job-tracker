import { verifySession } from "@/session/dal";
import CreateResponse from "./Components/CreateResponse";

export default async function Home() {
  const userSessionData = await verifySession();
  return <div className="bg-background"></div>;
}
