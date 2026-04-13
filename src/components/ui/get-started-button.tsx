import { AnimatedButton } from "./animated-button";

export function GetStartedButton({ className = "" }: { className?: string }) {
  return (
    <AnimatedButton className={className}>
      Get Started
    </AnimatedButton>
  );
}
