const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between mt-5">
      {[...Array(18)].map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
