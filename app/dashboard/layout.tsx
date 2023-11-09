import BotNav from "@/ui/dashboard/botnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <BotNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
