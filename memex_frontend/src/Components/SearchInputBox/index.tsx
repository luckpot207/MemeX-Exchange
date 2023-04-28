import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";

const SearchInputBox = () => {
  return (
    <div className="search__input-box">
      <Input
        placeholder="Enter Meme coin name"
        prefix={<SearchOutlined className="site-form-item-icon" />}
      />
    </div>
  );
};

export default SearchInputBox;
