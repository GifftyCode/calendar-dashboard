interface DialogTitleProps {
  children: React.ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

export default DialogTitle;
