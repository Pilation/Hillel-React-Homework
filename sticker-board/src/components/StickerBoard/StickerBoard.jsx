import { useCallback, useEffect, useMemo, useState } from "react";
import "./style.css";
import { APIget, APIpost, APIput, APIdelete } from "../../services/services";
import StickerItem from "./StickerItem";
import StickerNewItem from "./StickerNewItem";
import StickerFilter from "./StickerFilter";
import { useAPImethod } from "../../hooks/common";

export default function StickerBoard() {
  const [stickers, setStickers] = useState([]);
  const [filter, setFilter] = useState("default");
  const { runAPImethod, status } = useAPImethod(APIget, setStickers);

  useEffect(() => {
    runAPImethod();
  }, []);

  // features
  const getRandomColor = () => {
    let uniqueColors = new Set();
    stickers.forEach((e) => {
      uniqueColors.add(e.color);
    });
    let uniqueColorsArr = [...uniqueColors];

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    const randomColor =
      uniqueColorsArr[getRandomIntInclusive(0, uniqueColorsArr.length - 1)];
    return randomColor;
  };

  const GetDateString = (dateString) => {
    const addZero = (number, threshold) => {
      return number < threshold ? `0` + number : number;
    };
    const dateObj = new Date(dateString);
    let date =
      dateObj.getFullYear() +
      "-" +
      addZero(dateObj.getMonth(), 9) +
      "-" +
      addZero(dateObj.getDate(), 10);
    let time =
      addZero(dateObj.getHours(), 10) +
      ":" +
      addZero(dateObj.getMinutes(), 10) +
      ":" +
      addZero(dateObj.getSeconds(), 10);
    return date + ` ` + time;
  };

  const GetISOdateNow = () => {
    return new Date().toISOString();
  };

  const clearObj = (obj) => {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      newObj[key] = "";
    }
    return newObj;
  };

  const SortArrayByDate = (array) => {
    if (array.length > 0) {
      let SortedStickerDates = array
        .map((e) => new Date(e.date))
        .sort((a, b) => a - b)
        .map((e) => e.toISOString());
      let SottedStickers = [];
      SortedStickerDates.forEach((elem) => {
        SottedStickers.push(array.find((e) => e.date === elem));
      });
      return SottedStickers;
    }
  };
  // features

  const SortedStickers = useMemo(() => {
    switch (filter) {
      case "older":
        return SortArrayByDate(stickers);
      case "newer":
        return SortArrayByDate(stickers).reverse();
      default:
        return stickers;
    }
  }, [stickers, filter]);

  const onClickDelete = useCallback((id) => {
    runAPImethod(APIdelete, { id: id });
  }, []);

  const onInputChange = (e, obj) => {
    let newInput = { ...obj };
    newInput.description = e.target.value;
    return newInput;
  };

  const onBlurPut = useCallback((obj, id) => {
    obj.date = GetISOdateNow();
    runAPImethod(APIput, { obj: obj, id: id });
  }, []);

  const onSubmitPost = useCallback((e, obj) => {
    e.preventDefault();
    obj.color = getRandomColor();
    obj.date = GetISOdateNow();
    runAPImethod(APIpost, { obj: obj });
    return clearObj(obj);
  }, []);
  // events

  return (
    <div className="StickerBoard">
      <h2>status:{status.status}</h2>
      <StickerFilter
        filter={filter}
        setFilter={setFilter}
        className={"StickerFilter"}
      />
      <ul className="Sticker__list">
        {SortedStickers.map((sticker) => (
          <StickerItem
            data={sticker}
            date={GetDateString(sticker.date)}
            key={sticker.id}
            className="Sticker__card"
            onClick={onClickDelete}
            onBlur={onBlurPut}
            onInputChange={onInputChange}
          />
        ))}
        <StickerNewItem
          data={{ description: "" }}
          onSubmit={onSubmitPost}
          placeholder={`New sticker`}
          className="Sticker__AddNew"
          onInputChange={onInputChange}
        />
      </ul>
    </div>
  );
}
