import React from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = ({ total, current, handleChangePage }) => {
  let items = [];
  let number = 1;
  if (current > 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => {
          handleChangePage(current - 1);
        }}
      />
    );
  }

  for (number = 1; number <= Math.ceil(total / 8); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === current}
        data-page={number}
        onClick={(e) => {
          handleChangePage(parseInt(e.target.innerText));
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  if (current < total) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => {
          handleChangePage(current + 1);
        }}
      />
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default MyPagination;
