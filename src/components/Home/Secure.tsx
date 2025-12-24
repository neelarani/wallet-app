import { Lock } from 'lucide-react';

const Secure = () => {
  return (
    <main className="min-h-screen bg-background/60">
      {/* Fast & Secure Transactions Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-2xl md:text-5xl text-accent-foreground/90 font-bold text-center mb-20 tracking-wide">
            FAST & SECURE TRANSACTIONS
          </h1>

          {/* Main Layout with Phone Center and Features */}
          <div className="relative flex items-center justify-center gap-8 md:gap-16">
            {/* Left Features */}
            <div className="hidden lg:flex flex-col gap-16 w-1/4">
              {/* Feature 1 */}
              <div className="relative">
                <div className="text-right">
                  <h3 className="text-lg md:text-xl font-bold text-accent-foreground/90  mb-3 uppercase tracking-widest">
                    Easy Onboarding
                  </h3>
                  <p className="font-medium text-sm md:text-base leading-relaxed text-accent-foreground/70">
                    Download app, access account, and start managing finances
                    securely in minutes.
                  </p>
                </div>
                {/* Dotted connector */}
                <div className="absolute -right-20 top-6 w-16 h-0.5 border-t-2 border-dotted border-emerald-400"></div>
              </div>

              {/* Feature 2 */}
              <div className="relative mt-12">
                <div className="text-right">
                  <h3 className="text-lg md:text-xl font-bold text-accent-foreground/90 mb-3 uppercase tracking-widest">
                    PIN & Biometric
                    <br />
                    Authentication
                  </h3>
                  <p className="font-medium text-sm md:text-base leading-relaxed">
                    Secure verification with PIN, certification, and unique
                    biometric recognition.
                  </p>
                </div>
                {/* Dotted connector */}
                <div className="absolute -right-20 top-6 w-16 h-0.5 border-t-2 border-dotted border-emerald-400"></div>
              </div>
            </div>

            {/* Center Phone Mockup */}
            <div className="relative flex-shrink-0 w-full lg:w-auto max-w-xs">
              <div
                className="relative mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800"
                style={{ aspectRatio: '9/16' }}
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-10"></div>

                {/* Phone content */}
                <div className="w-full h-full bg-gray-50 p-6 flex flex-col items-center justify-center pt-12">
                  {/* App Header */}
                  <div className="w-full bg-emerald-500 rounded-lg p-4 mb-4 text-accent-foreground/90 text-center text-sm font-bold">
                    ← Add Money
                  </div>

                  {/* Wallet Icon */}
                  <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center mb-6 bg-gray-100">
                    <svg
                      className="w-12 h-12 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" />
                    </svg>
                  </div>

                  {/* Card Display */}
                  <div className="relative w-full max-w-xs">
                    <div className="bg-emerald-500 rounded-2xl p-4 transform -rotate-12 mb-4 shadow-lg">
                      <Lock className="w-6 h-6 text-accent-foreground/90  mx-auto mb-2" />
                    </div>
                    <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-6 text-accent-foreground/90  shadow-lg">
                      <div className="text-xs font-semibold mb-4">VISA</div>
                      <div className="text-xl font-mono mb-8">
                        •••• •••• •••• 4810
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>04/26</span>
                        <span>DEBIT</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone controls */}
                  <div className="flex gap-4 justify-center mt-8 text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="w-8 h-1 rounded-full bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="hidden lg:flex flex-col gap-16 w-1/4">
              {/* Feature 3 */}
              <div className="relative">
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold text-accent-foreground/90 mb-3 uppercase tracking-widest">
                    Secure Transactions
                  </h3>
                  <p className="font-medium text-sm md:text-base leading-relaxed ">
                    Pay merchants, send, scan via bolet, & scan QR codes with
                    your QR for security.
                  </p>
                </div>
                {/* Dotted connector */}
                <div className="absolute -left-20 top-6 w-16 h-0.5 border-t-2 border-dotted border-emerald-400"></div>
              </div>

              {/* Feature 4 */}
              <div className="relative mt-12">
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold text-accent-foreground/90  mb-3 uppercase tracking-widest">
                    Card & Fund Protection
                  </h3>
                  <p className="font-medium text-sm md:text-base leading-relaxed">
                    Advanced encryption and fraud protection with digital
                    balance security.
                  </p>
                </div>
                {/* Dotted connector */}
                <div className="absolute -left-20 top-6 w-16 h-0.5 border-t-2 border-dotted border-emerald-400"></div>
              </div>
            </div>

            {/* Mobile: Vertical features layout */}
            <div className="lg:hidden flex flex-col gap-12 w-full mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-accent-foreground/90  mb-2 uppercase tracking-widest">
                    Easy Onboarding
                  </h3>
                  <p className="font-medium text-sm text-accent-foreground/70">
                    Download app, access account, and start managing finances
                    securely in minutes.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-accent-foreground/90  mb-2 uppercase tracking-widest">
                    Secure Transactions
                  </h3>
                  <p className="font-medium text-sm text-accent-foreground/70">
                    Pay merchants, send, scan via bolet, & scan QR codes with
                    your QR for security.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-accent-foreground/90  mb-2 uppercase tracking-widest">
                    PIN & Biometric Auth
                  </h3>
                  <p className="font-medium text-sm text-accent-foreground/70">
                    Secure verification with PIN, certification, and unique
                    biometric recognition.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-accent-foreground/90 mb-2 uppercase tracking-widest">
                    Card & Fund Protection
                  </h3>
                  <p className="font-medium text-sm text-accent-foreground/70">
                    Advanced encryption and fraud protection with digital
                    balance security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative star */}
        <div className="fixed bottom-8 right-8 text-emerald-300 opacity-50">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default Secure;
