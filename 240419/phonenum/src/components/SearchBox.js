import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const SearchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={SearchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changeKeyword}
          />
        </Col>

        <Col lg={2}>
          <Button type="submit">검색</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
