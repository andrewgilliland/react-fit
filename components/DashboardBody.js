

const DashboardBody = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 max-w-screen-lg mx-auto">
        <h2 className="font-mono font-semibold text-2xl mt-10">My Workouts</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardBody;
