interface HtmlContentProps {
  content: string;
}

export const HtmlContent = ({ content }: HtmlContentProps) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };