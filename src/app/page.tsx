import { NextPage } from "next";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-2 py-4 overflow-y-scroll text-white ">
      <h1 className="mb-20 text-5xl font-bold ">ChatGPT</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Examples */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-5">
            {/* Sun Icon */}
            <SunIcon className="w-8 h-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-3.5">
            <p className="infoText">
              &quot; Explain quantum computing in simple terms → &quot;
            </p>
            <p className="infoText">
              &quot; Got any creative ideas for a 10 year old&apos;s birthday? →
              &quot;
            </p>
            <p className="infoText">
              {" "}
              &quot; What is the color of the sun? → &quot;
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-5">
            {/* Sun Icon */}
            <BoltIcon className="w-8 h-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-3.5">
            <p className="infoText">Remembers what user said earlier in the conversation</p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">Trained to decline inappropriate requests</p>
          </div>
        </div>

        {/* Limitations */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="w-8 h-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-3.5">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
