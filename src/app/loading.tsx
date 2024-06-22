import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[calc(100vh-3.5rem-1px)] flex flex-col items-center justify-center text-4xl font-semibold gap-3">
      <Loader size={50} className="animate-spin" />
      Loading...
    </div>
  );
};

export default loading;
