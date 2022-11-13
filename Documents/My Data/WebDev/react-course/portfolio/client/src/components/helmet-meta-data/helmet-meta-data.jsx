import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function HelmetMetaData(props) {
  let location = useLocation();
  let currentUrl = props.currentUrl
    ? props.currentUrl
    : "http://www.dulindis.com" + location.pathname;
  let quote = props.quote !== undefined ? props.quote : "";
  let title = props.title !== undefined ? props.title : "Dulin Dis Art";
  let image =
    props.imageUrl !== undefined
      ? props.imageUrl
      : "https://via.placeholder.com/150";
  let description =
    props.description !== undefined
      ? props.description
      : "Artistic portfolio of Paulina Okulska.";
  let hashtag = props.hashtag !== undefined ? props.hashtag : "#dulindis";

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="DulinDis" />
      <meta property="og:description" content={description} />{" "}
    </Helmet>
  );
}
