export default function PuzzleGrid() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="puzzlePattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Complete puzzle piece outline - no straight lines where curves exist */}
            {/* Top edge: straight, then outward bump, then straight */}
            <path
              d="M 0 0 
                 L 30 0 
                 C 30 0, 30 -10, 40 -10 
                 C 50 -10, 50 0, 50 0 
                 L 80 0"
              fill="none"
              stroke="hsl(169 43% 59% / 0.15)"
              strokeWidth="1"
            />
            
            {/* Right edge: straight, then inward bump, then straight */}
            <path
              d="M 80 0 
                 L 80 30 
                 C 80 30, 90 30, 90 40 
                 C 90 50, 80 50, 80 50 
                 L 80 80"
              fill="none"
              stroke="hsl(169 43% 59% / 0.15)"
              strokeWidth="1"
            />
            
            {/* Bottom edge: straight, then inward bump, then straight */}
            <path
              d="M 80 80 
                 L 50 80 
                 C 50 80, 50 90, 40 90 
                 C 30 90, 30 80, 30 80 
                 L 0 80"
              fill="none"
              stroke="hsl(169 43% 59% / 0.15)"
              strokeWidth="1"
            />
            
            {/* Left edge: straight, then outward bump, then straight */}
            <path
              d="M 0 80 
                 L 0 50 
                 C 0 50, -10 50, -10 40 
                 C -10 30, 0 30, 0 30 
                 L 0 0"
              fill="none"
              stroke="hsl(169 43% 59% / 0.15)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#puzzlePattern)" />
      </svg>
    </div>
  );
}
