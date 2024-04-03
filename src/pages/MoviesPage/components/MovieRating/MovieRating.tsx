import { Rate } from "antd";
import { memo } from "react";
import styles from "./MovieRating.module.scss";

const { container } = styles;

const MovieRating = ({
  rating,
  handleOnRatingChange,
}: {
  rating: number;
  personalRating?: number;
  handleOnRatingChange: (rating: number) => void;
}) => {
  return (
    <div className={container}>
      <p>Rating {rating}/5</p>
      <Rate
        allowHalf
        allowClear
        defaultValue={rating}
        value={rating}
        onChange={handleOnRatingChange}
      />
    </div>
  );
};

export default memo(MovieRating);

//TODO: Changes
//FE
//one page app
//crud btns
//watched & to be watched categories & buttons - for filtering
//search by name
//personal rating
//dockerize
//intro page for BE base url switch

//BE
//Rest API
//getAll -> filtre nume, status {seen, wishlist}
//post [tbd]
//put [tbd]
//delete
//patch - rating
//getById
/*
{
  id: Guid,
  title: string,
  rating: float,
  url / base64Img: string,
  status: enum {seen, wishlist},
}
*/
//dockerize
//swagger
//error handling middleware??
