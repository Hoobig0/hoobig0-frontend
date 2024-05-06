import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-red-300 p-2">
      <h3> 후비고홈 </h3>
    </div>
  );
}
