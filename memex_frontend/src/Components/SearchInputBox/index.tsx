import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";

const SearchInputBox = ({...props}) => {
  return (
    <div className="search__input-box">
      <Input
        placeholder={props.place}
        prefix={<SearchOutlined className="site-form-item-icon" />}
      />
    </div>
  );
};

export default SearchInputBox;
