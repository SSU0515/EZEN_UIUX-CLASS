import React, { useEffect, useState } from "react";
//저장한 데이터를 출력해줄 공간과 검색기능이 필요하다(공간을 나눠서 만들어줌)
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <div>
      <SearchBox />
      {filteredList.map((item, idx) => (
        <ContactItem item={item} key={idx} />
      ))}
    </div>
  );
};

export default ContactList;
