import React, { useContext, useEffect, useState } from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";
import {
  useGetAllProduct,
  useGetSearchProducts,
  useGetSelectedProducts,
} from "hooks/queries/productQueries";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBar from "stories/molecules/headerBar";
import { AudioStateContext, VideoStateContext, VoiceServiceStateContext } from "App";

const ProductPage = () => {
  const [clicked, setClicked] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const prodType_ko = ["전체", "입출금", "예금", "적금", "대출", "검색"];
  const {setSrc,setRepeat,setAutoPlay} = useContext(VideoStateContext);
  const {result, setOptions,setType}=useContext(VoiceServiceStateContext);
  const {setText} = useContext(AudioStateContext);

  const navigate = useNavigate();
  const {
    data: allProducts,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useGetAllProduct();
  const {
    data: selectedProducts,
    isLoading: isLoadingSelected,
    error: errorSelected,
  } = useGetSelectedProducts(clicked);
  const {
    data: searchedProducts,
    isLoading: isLoadingSearched,
    error: errorSearched,
  } = useGetSearchProducts(searchWord);

  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      setClicked(0);
    }
    if (location.state && location.state.index !== undefined) {
      setClicked(location.state.index);
      setText(`${prodType_ko[location.state.index]} 상품들을 불러왔어요! 어떤 상품을 가입하시겠어요?`);
      setSrc("/assets/noVoice.mov");
      setRepeat(true);
    }
  }, [location.state]);

  useEffect(()=>{
    if(result && selectedProducts){
      Object.values(selectedProducts)[0].map((product)=>{
        if(product.prodName===result){
          navigate(`/product/${product.prodCode}`,{state:{prodCode:product.prodCode, goToOpening:true}})
        }
      })
    }
  },[result])

  useEffect(()=>{
    if(selectedProducts){
      let options = []
      Object.values(selectedProducts)[0].map((product)=>{
        options.push({name:product.prodName,data:product.prodCode})
      })
      setOptions(options)
      setType("text")
    }
  },[selectedProducts])

  useEffect(() => {}, [allProducts, selectedProducts, searchedProducts]);

  if (isLoadingAll || isLoadingSelected || isLoadingSearched) {
    return <div>Loading...</div>;
  }

  if (errorAll || errorSelected || errorSearched) {
    return <div>Error loading data</div>;
  }

  let productsToDisplay = null;
  if (clicked === 0) {
    productsToDisplay = allProducts;
  } else if (clicked === 5) {
    productsToDisplay = searchedProducts;
  } else {
    productsToDisplay = selectedProducts;
  }

  return (
    <div className="pt-27 w-640 flex flex-col min-h-screen">
      <div className="px-40">
        <HeaderBar text={"상품"}></HeaderBar>
      </div>

      <div className="bg-main-bg px-54 pt-24 min-h-screen">
        <div className="mb-24">
          <SearchBar
            placeholder={"어떤 상품을 찾으세요?"}
            setSearchWord={setSearchWord}
            setClicked={setClicked}
          />
        </div>
        <div className="mb-40">
          <ProdButtons clicked={clicked} setClicked={setClicked} />
        </div>
        {productsToDisplay ? (
          <ProductList data={productsToDisplay} />
        ) : (
          <div>No products to display</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
