export default function Footer() {
  return (
    <footer>
      <div className="container max-w-7xl mx-auto w-full p-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-end pb-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="font-bold py-1.5 px-3 rounded-md bg-black text-white dark:bg-foreground dark:text-background">
                N
              </span>
              <span className="font-bold text-xl">Nexus Digital</span>
            </div>
            <p className="pt-4">
              We build high-performance websites and web applications that drive
              results. Transform your digital presence with our expert team.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl py-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl py-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl py-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-muted-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-foreground" />
        <div className="py-4">
          <p className="text-sm">© 2026 Nexus Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
