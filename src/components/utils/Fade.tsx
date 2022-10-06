import { useEffect, useRef } from "react";

const Fade = ({ children }: FadeProps) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = domRef;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(current);

    return () => observer.unobserve(current);
  });

  return (
    <div className={`fade`} ref={domRef}>
      {children}
    </div>
  );
};

export default Fade;

interface FadeProps {
  children: JSX.Element;
}
