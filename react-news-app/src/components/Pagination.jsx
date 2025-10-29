const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  const disabledPrev = currentPage === 1;
  const disabledNext = currentPage === totalPages;

  return (
    <div className="join flex justify-center mt-4">
      <button
        onClick={onPrev}
        className={`join-item btn ${disabledPrev ? "btn-disabled" : ""}`}
      >
        Previous
      </button>
      <button className="join-item btn btn-disabled no-animation">
        Page {currentPage} of {totalPages}
      </button>
      <button
        onClick={onNext}
        className={`join-item btn ${disabledNext ? "btn-disabled" : ""}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
