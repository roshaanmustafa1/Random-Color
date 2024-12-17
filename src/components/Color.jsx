/* eslint-disable react/prop-types */
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Color = ({ hexColor }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <CopyToClipboard text={hexColor} onCopy={onCopyText}>
      <div
        style={{
          backgroundColor: hexColor,
          color: "#fff",
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        className="w-[120px] h-[120px] flex flex-col justify-center items-center"
      >
        <p>{hexColor}</p>
        {copyStatus && (
          <span className="text-sm mt-2 text-center">Copied to clipboard!</span>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default Color;
