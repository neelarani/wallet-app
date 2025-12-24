import { Logo, Logout, NavMenu } from '@/components';
import { userApi } from '@/redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const user = userApi.useUserInfoQuery();
  const userData = user.data?.data;

  return (
    <header className="bg-background border-b sticky top-0 left-0 z-[var(--z-header)]">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
          <NavLink className="block text-primary" to="/">
            <Logo />
          </NavLink>

          <div className="flex flex-1 items-center justify-end gap-6">
            <NavMenu />
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 ">
                {userData ? (
                  <Logout />
                ) : (
                  <>
                    <NavLink
                      className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      to="/login"
                    >
                      Login
                    </NavLink>

                    <NavLink
                      className="hidden rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 sm:block"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
