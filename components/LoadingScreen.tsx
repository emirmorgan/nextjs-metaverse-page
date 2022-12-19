const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center bg-primary-black w-full h-screen overflow-hidden">
      <div className="relative">
        <div className="gradient-04" />
      </div>
      <span className="loader"></span>
    </div>
  );
};

export default LoadingScreen;
