import { CheckCircle } from "lucide-react";
const ComparisonTable = () => {
  const features = [{
    feature: "1:1 Classes",
    bambinos: true,
    vedantu: true,
    physics: false,
    planet: true
  }, {
    feature: "Use of AI Tech",
    bambinos: true,
    vedantu: false,
    physics: false,
    planet: false
  }, {
    feature: "AI Device (MyDoodle AI)",
    bambinos: true,
    vedantu: false,
    physics: false,
    planet: false
  }, {
    feature: "Physical Books",
    bambinos: true,
    vedantu: false,
    physics: true,
    planet: false
  }, {
    feature: "Learn-A-Thon",
    bambinos: true,
    vedantu: false,
    physics: false,
    planet: false
  }, {
    feature: "Homework Room",
    bambinos: true,
    vedantu: false,
    physics: false,
    planet: false
  }];
  return <div className="mb-12 bg-card rounded-2xl p-6 shadow-lg overflow-x-auto">
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-3 font-semibold text-foreground"></th>
              <th className="text-center p-3 font-bold text-primary">bambinos.live</th>
              <th className="text-center p-3 font-semibold text-foreground">Vedantu</th>
              <th className="text-center p-3 font-semibold text-foreground">Physics Wallah</th>
              <th className="text-center p-3 font-semibold text-foreground">PlanetSpark</th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, index) => <tr key={index} className="border-b border-border/50">
                <td className="p-3 font-medium text-foreground">{row.feature}</td>
                <td className="p-3 text-center">
                  {row.bambinos ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" /> : <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-sm">✕</span>
                    </div>}
                </td>
                <td className="p-3 text-center">
                  {row.vedantu ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" /> : <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-sm">✕</span>
                    </div>}
                </td>
                <td className="p-3 text-center">
                  {row.physics ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" /> : <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-sm">✕</span>
                    </div>}
                </td>
                <td className="p-3 text-center">
                  {row.planet ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" /> : <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-sm">✕</span>
                    </div>}
                </td>
              </tr>)}
            <tr className="border-b border-border/50 bg-muted/30">
              <td className="p-3 font-medium text-foreground">Reviews (Trustpilot + Google)</td>
              <td className="p-3 text-center font-bold text-primary">4.7 / 5</td>
              <td className="p-3 text-center">4.5 / 5</td>
              <td className="p-3 text-center">3.9 / 5</td>
              <td className="p-3 text-center">3.9 / 5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
};
export default ComparisonTable;