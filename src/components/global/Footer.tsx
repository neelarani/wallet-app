import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components";
import { Link, useLocation } from "react-router-dom";

const hidePaths = ["/user", "/admin", "/agent"];

const Footer = () => {
  const location = useLocation();
  const shouldRenderFooter =
    hidePaths.findIndex((path: string) =>
      location.pathname.startsWith(path)
    ) !== 0;

  return shouldRenderFooter ? (
    <footer className="bg-background border-t">
      <div className="container mx-auto">
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <Logo />

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 w-full">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Stay in the loop
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Subscribe for updates on new wallet features and security
                  tips.
                </p>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="flex w-full items-center gap-2">
                  <Input
                    type="email"
                    placeholder="you@email.com"
                    className="flex-1"
                  />
                  <Button type="submit" className="shrink-0">
                    Sign Up
                  </Button>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-foreground">Features</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="/send-money">Send Money</Link>
                  </li>
                  <li>
                    <Link to="/receive">Receive Payments</Link>
                  </li>
                  <li>
                    <Link to="/transactions">Transaction History</Link>
                  </li>
                  <li>
                    <Link to="/cards">Linked Cards</Link>
                  </li>
                  <li>
                    <Link to="/security">Security</Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-foreground">Company</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Meet the Team</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-foreground">Support</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="/support">Contact Support</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/live-chat">Live Chat</Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-foreground">Legal</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/cookies">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} NWA. All rights reserved.
            </p>
            <ul className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground sm:mt-0">
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
