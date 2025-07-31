import Card from "@/components/Cards/card";

import { shoes } from "./data";

export default function Page() {
  return (
    <main>
      <div className="container">
        <div className="row">
          {Object.entries(shoes).map(([key, shoe]) => (
            <div className="col-md-4 mb-4" key={key}>
              <Card shoe={shoe}  grip={key}/>
            </div>
          ))}
        </div>
      </div>
      </main>
      );
}