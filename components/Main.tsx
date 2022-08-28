import { Pass } from "../lib/utils";

const Main = ({ children }: Pass) => {
  return (
    <main className="flex-1">
      <div className="px-4 md:px-8 mx-auto max-w-7xl py-12">{children}</div>
    </main>
  );
};

export default Main;
