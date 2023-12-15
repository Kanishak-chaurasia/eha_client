import BestSellerPage from "@/components/BestSellers/BestSellerPage";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Loading from "@/utils/loading";

const BestSellers = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log("id",id)
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const filterOption = useSelector((state) => state?.filter);
  console.log("All catogary",filterOption.field,filterOption.sort);
if (!filterOption) {
  // Handle loading state, e.g., show a loading spinner
  return <Loading/>;
}


  return (
    <Box>
      <Head>
        <title>EHA | Category </title>
        <description>Get all electronics products</description>
      </Head>
      <BestSellerPage
        id={id}
        sortField={filterOption.field}
        dir={filterOption.sort}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default BestSellers;
