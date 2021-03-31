

const DashboardBody = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 max-w-screen-lg mx-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardBody;
