export const HeaderText = ({
  id = "",
  className = "",
}: {
  id: string;
  className: string;
}) => {
  return (
    <div id={id} className={className}>
      Alex Harris
    </div>
  );
};
