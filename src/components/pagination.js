import React from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = ({ total, current, handleChangePage }) => {
  let items = [];
  let number = 1;

  //If the user is not on 1st page i.e. 2nd or 3rd then previous button will show 
  if (current > 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => {
          handleChangePage(current - 1); // This is a callback function
        }}
      />
    );
  }

  // To display the number pages on which the total number of items can be distributed
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

  //The next button will be shown till user is on last page
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
