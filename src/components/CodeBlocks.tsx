import { CodeBlock } from "react-code-block";

export const CodeBlocks = ({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className: string;
}) => {
  return (
    <CodeBlock language={language} code={code}>
      <CodeBlock.Code className={className}>
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
};
