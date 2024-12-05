import React from "react";
import Link from "next/link";

function OkayButton({ closeModal }) {
  const handleClick = () => {
    closeModal(); // Close the modal before navigating
  };

  return (
    <Link href="/">
      <button
        onClick={handleClick}
        className="mt-2 text-lg text-purple-900 transition-all"
      >
        Ok
      </button>
    </Link>
  );
}

export default OkayButton;
