import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/icons/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/utils/supabase/queries';
import { currentUser } from '@clerk/nextjs/server';
import MenuLinks from '@/components/menuLinks'
// import { currentUser } from '@clerk/nextjs/server';

const Header = async () => {
  const user = await currentUser();
  const supabase = await createClient();
  let subscription;

  if (user) {
    [subscription] = await Promise.all([
      getSubscription(supabase, user.id)
    ]);
  }
  
  // const [menuShow , setMenuShow] = useState(false)
  // let menuShow = false
  // if(window.innerWidth <= 991) menuShow = true
  // const menuHadler = () => {
  //   setMenuShow(!menuShow)
  // }


  return (
    <header className="main-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav
              className="navbar navbar-expand-lg"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                  <Image
                    className="lazy"
                    src={logo}
                    width={64}
                    height={127}
                    alt="SkinnyTax"
                  />
                </Link>
              <MenuLinks subscription={subscription} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
