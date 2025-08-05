import { useSelector } from "react-redux";

function Header() {
  const { item } = useSelector((state) => state.cart);
  console.log(item);
  return <div>
    <p>{item?.title}</p>
  </div>;
}

export default Header;
