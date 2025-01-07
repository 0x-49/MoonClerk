import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="cursor-pointer flex items-center" onClick={() => router.push("/")}>
          <Logo />
          <span className="ml-2 text-xl font-bold">JoinMoonClerk</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#security" className="text-muted-foreground hover:text-primary transition-colors">
            Security
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild>
            <Link href="https://www.moonclerk.com/signup">
              Explore for Free
            </Link>
          </Button>
        </nav>

        <Button className="md:hidden" variant="outline" size="sm">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;