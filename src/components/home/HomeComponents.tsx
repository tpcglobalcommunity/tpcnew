import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Card";

interface TrustBadgeProps {
  items: string[];
  className?: string;
}

export function TrustBadges({ items, className }: TrustBadgeProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <Badge variant="default" className="w-full justify-center py-2 px-3 text-xs md:text-sm">
            {item}
          </Badge>
        </div>
      ))}
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Card className="group hover:border-[#d4af37]/30 transition-all duration-300">
      <CardContent>
        <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[#a0a0a0] mb-4 leading-relaxed">
          {description}
        </p>
        <a 
          href={href}
          className="inline-flex items-center text-[#d4af37] hover:text-[#b8941f] text-sm font-medium transition-colors duration-300"
        >
          Learn more →
        </a>
      </CardContent>
    </Card>
  );
}

interface StepProps {
  number: number;
  text: string;
}

export function Step({ number, text }: StepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-sm">
        {number}
      </div>
      <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
        {text}
      </p>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <Card className="border-[#2a2a3a]/30">
      <CardContent>
        <h4 className="text-base md:text-lg font-bold text-white mb-3">
          {question}
        </h4>
        <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
          {answer}
        </p>
      </CardContent>
    </Card>
  );
}
