import React from "react";

const UILoading = ({
  title = "Loading",
  desc = "Loading in Progress...",
  size = 1,
  color = "#fff"
}) => {
  return (
    <>
      <svg
        version="1.1"
        id="L3"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        width={size * 400}
      >
        <circle
          fill="none"
          stroke={color}
          strokeWidth="4"
          cx="50"
          cy="50"
          r="44"
          style={{ opacity: 0.5 }}
        />
        <circle
          fill="#fff"
          stroke="hsl(204, 71%, 53%)"
          strokeWidth="1"
          cx="8"
          cy="54"
          r="3"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"
          />
        </circle>
        <text
          textAnchor="middle"
          x="50"
          y="50"
          style={{
            fontSize: `calc(0.7em + ${size * 0.08}em)`,
            fill: "#fafafa",
            fontWeight: 100
          }}
        >
          {title}
        </text>

        <text
          textAnchor="middle"
          x="50"
          y="60"
          style={{
            fill: "#fafafa",
            fontSize: `calc(0.325em + ${size * 0.02}em)`
          }}
        >
          {desc}
        </text>
      </svg>
    </>
  );
};

export default UILoading;
