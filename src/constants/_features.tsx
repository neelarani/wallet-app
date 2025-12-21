import { ShieldCheck, Wallet, Send, Globe, LineChart } from "lucide-react";

export const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption keeps your money and data safe at all times.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Smart Wallet",
    description:
      "Manage your balance, add funds, and withdraw instantly with ease.",
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Instant Transfers",
    description:
      "Send and receive money in seconds — no hidden delays or fees.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Multi-Currency Support",
    description:
      "Hold and exchange currencies globally with competitive rates.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Track & Insights",
    description: "Monitor your spending and income with real-time analytics.",
  },
] as const;
