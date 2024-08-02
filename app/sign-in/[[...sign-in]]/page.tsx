import { SignIn } from '@clerk/nextjs';

export default function Page({ searchParams }: { searchParams: any }) {
  console.log('🚀 ~ Page ~ searchParams:', searchParams);
  const { redirect_to } = searchParams;
  console.log('🚀 ~ Page ~ redirectUrl:', redirect_to);
  return (
    <div
      className="d-flex justify-content-center align-items-center py-24 full-height"
      style={{ height: '100vh', overflow: 'auto' }}
    >
      <SignIn forceRedirectUrl={redirect_to || '/'} />
    </div>
  );
}
