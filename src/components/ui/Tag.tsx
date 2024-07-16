import React from "react";

interface TagProps {
  tag: string;
  outline: boolean;
}

const Tag = ({ tag, outline }: TagProps) => {
  return (
    <div
      className="description w-fit rounded-2xl px-4 py-2"
      style={
        outline
          ? {
              background: "var(--color-dark-cream)",
              color: "var(--color-bg-black)",
            }
          : {
              border: "2px solid var(--color-dark-cream)",
              color: "var(--color-dark-cream)",
            }
      }
    >
      {tag}
    </div>
  );
};

export default Tag;
