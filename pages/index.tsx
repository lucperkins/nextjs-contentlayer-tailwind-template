import { NextPage } from "next";

import { description, tagline } from "../site";

const Index: NextPage = () => {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <h1 className="text-3xl font-semibold tracking-tight">{tagline}</h1>
      <h2 className="text-lg font-light">{description}</h2>
    </div>
  );
};

export default Index;
