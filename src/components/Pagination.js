import "../scss/_pagination.scss";

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log({ currentPage, itemsPerPage, totalItems });

  return (
    <nav>
      <ul className="pagination_2">
        <li className="arrow-1">
          <button onClick={() => paginate(1)} disabled={currentPage === 1}>
            «
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : null}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li className="arrow-2">
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </li>
      </ul>
    </nav>
  );
}
