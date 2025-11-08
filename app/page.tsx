import { HeroSection, UserPrograms } from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <HeroSection />
      <UserPrograms />
    </div>
  );
}
