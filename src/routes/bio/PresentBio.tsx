export const PresentBio = () => {
  const info: string = `
                My team is small, which means the work is broad: server
                infrastructure, internal tooling, and whatever the day turns
                out to need. It's reactive by design and has an on-call
                rotation. It's the first job I've had where the shape of the
                day is genuinely unknown when it starts, and I've always found
                that exciting. New day, new problems to solve.
`;
  return (
    <>
      <br />
      <h2 className="mt-5 mb-2">Present:</h2>
      {info
        .trim()
        .split("\n\n") // Splitting by double newlines to separate paragraphs
        .map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
    </>
  );
};
