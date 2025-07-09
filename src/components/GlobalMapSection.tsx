const GlobalMapSection = () => {
  return (
    <div className="mb-12 text-center">
      <h3 className="text-xl font-bold text-foreground mb-8">Global Impact</h3>
      <div className="relative bg-primary/5 rounded-2xl p-8 mx-auto max-w-4xl">
        {/* World Map SVG*/}

        {/*
          <div className="mb-6">
            <svg viewBox="0 0 800 400" className="w-full h-48 mx-auto">
              
              <g fill="hsl(var(--primary))" fillOpacity="0.8">
              
                <path d="M100 120 L180 110 L190 130 L170 150 L120 160 L80 140 Z" />
                
                <path d="M150 200 L170 190 L180 220 L175 260 L160 280 L145 270 L140 240 Z" />
                
                
                <path d="M320 100 L360 95 L370 110 L350 125 L325 120 Z" />
                
                
                <path d="M320 140 L360 135 L370 180 L365 220 L340 240 L325 200 L315 160 Z" />
                
                <path d="M380 90 L500 85 L520 110 L510 140 L480 150 L450 130 L375 120 Z" />
                
                
                <path d="M520 220 L560 215 L570 235 L555 245 L525 240 Z" />
              </g>
            </svg>
          </div>
        */}


        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Students Worldwide</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMapSection;