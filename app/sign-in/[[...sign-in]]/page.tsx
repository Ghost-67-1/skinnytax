import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="d-flex justify-content-center align-items-center py-24 full-height" style={{ height: "100vh", overflow: "auto" }}>
      <SignIn />
    </div>
  );
}
