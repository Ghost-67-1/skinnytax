import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/icons/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/utils/supabase/queries';
import { currentUser } from '@clerk/nextjs/server';
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
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarBasicExample"
                  aria-controls="navbarBasicExample"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarBasicExample" className={`collapse navbar-collapse `}>
                  <ul id="menu-main-menu" className="navbar-nav ms-auto">
                    <li className="nav-item active">
                      <Link href="/" className="nav-link" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Solutions
                      </a>
                      <ul className="sub-menu dropdown-menu">
                        <li className="nav-item">
                        <Link className="nav-link" href="/income-tax">
                            Income Tax Planning
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/capital-tax">
                            Capital Tax Gains
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/charitable-trust">
                            Charitable Trust
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/qabs">
                            QSBS
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/family-office">
                            Family Office
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/estate-tax">
                            Estate Tax
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/carried-interest">
                            Carried Interest
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Resources
                      </a>
                      <ul className="sub-menu dropdown-menu">
                        <li className="nav-item">
                        <Link className="nav-link" href="/blog">
                            The Skinny On Taxes
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                        Contact
                      </Link>
                    </li>
                    <SignedIn>
                      {subscription ? (
                    <li className="nav-item">
                    <Link className="nav-link" href="/calculator">
                        Calculator
                      </Link>
                    </li>
                      ):null}
                      </SignedIn>
                    <li className="btn-quote nav-item active">
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
