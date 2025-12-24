import { NavLink } from 'react-router-dom';
import { cn } from '@/lib';
import { useIsMobile, useJoyride } from '@/hooks';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components';

const NavItem: Array<{ path: string; label: string }> = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Features', path: '/features' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

const NavMenu = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useJoyride('home', isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-background shadow-md">
            <ul className="flex flex-col p-2 text-sm">
              {NavItem.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground',
                        isActive &&
                          'text-foreground font-medium bg-accent border-l-2 border-primary'
                      )
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="block rounded-md px-3 py-2 text-center">
                <ModeToggle />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <nav aria-label="Global">
      <ul className="flex items-center gap-2 text-sm">
        {NavItem.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 rounded-md transition-colors text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent',
                  isActive && 'text-foreground border-primary'
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li className="block rounded-md px-3 py-2 text-center">
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
