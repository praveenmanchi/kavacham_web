import ReactPaginate from "react-paginate";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

const Pagination = ({ handlePageClick, pageCount }: IProps) => {
  return (
    <ReactPaginate
      className="pagination list-wrap"
      breakLabel="..."
      activeClassName="active"
      nextLabel={<i className="fas fa-arrow-right"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="fas fa-arrow-left"></i>}
      renderOnZeroPageCount={null}
      containerClassName="cnt"
    />
  );
};

export default Pagination;
