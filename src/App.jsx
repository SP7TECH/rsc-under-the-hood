import { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function App() {
  console.log("rendering App....");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <h1>Notes App</h1>
      <ServerComponent />
      <ClientComponent />
    </Suspense>
  );
}
