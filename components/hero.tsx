// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, LightbulbIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-8 md:pt-20 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
            <Star className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium font-kode-mono">AI-Powered Renewable Energy Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground font-kode-mono">
            S<span className="inline-flex items-center">
              <LightbulbIcon className="w-12 h-12 md:w-16 md:h-16 text-foreground fill-foreground" />
            </span>lar Energy
            <br />
            <span className="animate-typing flex">
              {"Insights".split('').map((letter, i) => (
                <span key={i} style={{ '--index': i } as any}>
                  {letter}
                </span>
              ))}
            </span>
            Platform
            <br />
          </h1>
          <p className="text-lg text-muted-foreground max-w-md font-kode-mono">
            Empower your solar investments with data-driven predictions
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg font-kode-mono">
              Register <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 font-kode-mono">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="/images/Image3.jpg"
            alt="Tech professional"
            width={600}
            height={400}
            className="relative rounded-2xl shadow-2xl object-cover"
          />
          <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-secondary to-background p-6 rounded-xl shadow-xl border border-mint/10 dark:from-secondary dark:to-background backdrop-blur-sm">
            <p className="text-mint text-4xl font-bold font-kode-mono">124k+</p>
            <p className="text-muted-foreground font-kode-mono">Active candidates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;