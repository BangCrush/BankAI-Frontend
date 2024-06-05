import { useGetTop3Products } from "hooks/queries/productQueries";
import SearchBar from "stories/molecules/searchBar";
import PopularProd from "stories/organisms/popularProd";
import ProdContainer from "stories/organisms/prodContainer";

const ProductMainPage = () => {
  const { data: top3, isLoading } = useGetTop3Products();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-40 py-36 bg-main-bg min-h-screen">
      <div className="font-bold text-20 p-5">인기 상품 TOP3</div>
      <div className="flex flex-col space-y-8">
        <PopularProd data={top3} imgs={["fist", "heart", "shuttle"]} />
        <SearchBar placeholder={"어떤 상품을 찾으세요?"} readonly={true} />

        <ProdContainer
          title={"모든 상품"}
          data={["입출금", "예금", "적금", "대출"]}
          imgs={[0, 1, 2, 4]}
          urls={["/product", "/product", "/product", "/product"]}
        ></ProdContainer>
      </div>
    </div>
  );
};

export default ProductMainPage;
