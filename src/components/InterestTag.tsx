interface InterestTagProps {
  title: string;
  content: string;
}

const InterestTag = ({ title }: InterestTagProps) => {
  return (
    <span
      className="px-5 py-2.5 rounded-full border border-primary/40 bg-primary/5 
                 font-body text-sm font-medium text-foreground
                 select-none cursor-default"
    >
      {title}
    </span>
  );
};

export default InterestTag;