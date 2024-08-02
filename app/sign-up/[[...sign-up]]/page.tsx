import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="d-flex justify-content-center align-items-center py-24 full-height" style={{ height: "100vh", overflow: "auto", background:'#fff0d7' }}>
      <SignUp />
    </div>
  );
}
