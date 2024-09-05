import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

// ComingSoon.jsx
const ComingSoon = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <ExclamationTriangleIcon color="yellow" height={100} stroke="black"/>
      <h1 className="text-3xl font-bold">Coming Soon</h1>
      <p className="text-gray-500">This page is under construction.</p>
    </div>
  );
};

export default ComingSoon;
