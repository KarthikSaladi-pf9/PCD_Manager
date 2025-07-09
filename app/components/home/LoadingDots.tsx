const LoadingDots = () => {
  return (
    <span className="inline-flex items-baseline gap-[2px] ml-1">
      <span className="animate-bounce text-4xl text-blue-500 [animation-delay:0ms]">
        .
      </span>
      <span className="animate-bounce text-4xl text-blue-500 [animation-delay:150ms]">
        .
      </span>
      <span className="animate-bounce text-4xl text-blue-500 [animation-delay:300ms]">
        .
      </span>
    </span>
  );
};

export default LoadingDots;
