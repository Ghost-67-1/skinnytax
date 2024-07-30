import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import { currentUser } from '@clerk/nextjs/server';

export default async function Navbar() {
  // const supabase = createClient();

  const user = await currentUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <Navlinks user={JSON.stringify(user)} />
      </div>
    </nav>
  );
}
