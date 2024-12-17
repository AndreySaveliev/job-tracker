import { verifySession } from "@/session/dal";

export default async function Home() {
  const userSessionData = await verifySession();
  return (
    <div className="bg-background">
      <h1>MAIN PAGE</h1>
    </div>
  );
}
