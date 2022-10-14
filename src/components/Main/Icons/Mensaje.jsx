import React from "react";
import WarningIcon from "@heroicons/react/solid/ExclamationCircleIcon"
const Mensaje = () => {
  return (
    <div>
      <svg class="animate-bounce w-6 h-6"><WarningIcon className="w-5 h-5 text-amber-100 mx-auto"/></svg>
    </div>
  );
};

export default Mensaje;
