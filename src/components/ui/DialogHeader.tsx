interface DialogHeaderProps {
  children: React.ReactNode;
}

const DialogHeader = ({ children }: DialogHeaderProps) => {
  return <div className="mb-4">{children}</div>;
};

export default DialogHeader;
