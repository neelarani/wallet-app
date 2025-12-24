import { Logo, NavMenu, Logout } from '@/components';
import { userApi } from '@/redux';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { data } = userApi.useUserInfoQuery();
  const userData = data?.data;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // বাইরে click করলে dropdown বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-background border-b sticky top-0 z-[var(--z-header)]">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <NavLink to="/">
            <Logo />
          </NavLink>

          <div className="flex items-center gap-6">
            <NavMenu />

            {userData ? (
              <div className="relative" ref={dropdownRef}>
                {/* Avatar */}
                <img
                  src="https://i.ibb.co.com/h8fLJMm/images.png"
                  className="w-10 h-10 rounded-full cursor-pointer border"
                  onClick={() => setOpen(prev => !prev)}
                />

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl border bg-background shadow-lg p-3">
                    <div className="mb-2 border-b pb-2">
                      <p className="text-sm md:text-base font-medium">
                        {userData.email}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        Role: {userData.role}
                      </p>
                    </div>

                    <NavLink
                      to="/dashboard"
                      className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Dashboard
                    </NavLink>

                    <div className="mt-2">
                      <Logout />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="hidden sm:block rounded-md bg-secondary px-5 py-2.5 text-sm"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
