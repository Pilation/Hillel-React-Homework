import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { APIget, APIpost, APIput, APIdelete } from "../../services/services";
import StickerItem from "./StickerItem";
import StickerNewItem from "./StickerNewItem";
import { useAPImethod } from "../../hooks/common";

export default function StickerBoard() {
  const [stickers, setStickers] = useState([]);
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
    console.log(randomColor);
    return randomColor;
  };

  const GetDate = (dateString = ``) => {
    const addZero = (number, threshold) => {
      return number < threshold ? `0` + number : number;
    };
    const dateObj = dateString ? new Date(dateString) : new Date();
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

  const clearObj = (obj) => {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      newObj[key] = "";
    }
    return newObj;
  };

  // events
  const onClickDelete = useCallback((id) => {
    runAPImethod(APIdelete, { id: id });
  }, []);

  const onInputChange = (e, obj) => {
    let newInput = { ...obj };
    newInput.description = e.target.value;
    return newInput;
  };

  const onMouseLeavePUT = useCallback((initialData, obj, id) => {
    if (initialData !== obj.description) {
      obj.date = GetDate();
      runAPImethod(APIput, { obj: obj, id: id });
    }
  }, []);

  const onSubmitPOST = useCallback((e, obj) => {
    e.preventDefault();
    obj.color = getRandomColor();
    obj.date = GetDate();
    runAPImethod(APIpost, { obj: obj });
    return clearObj(obj);
  }, []);
  // events

  return (
    <div className="StickerBoard">
      <h2>status:{status.status}</h2>
      <ul className="Sticker__list">
        {stickers.map((sticker) => (
          <StickerItem
            data={sticker}
            date={GetDate(sticker.date)}
            key={sticker.id}
            className="Sticker__card"
            onClick={onClickDelete}
            onMouseLeave={onMouseLeavePUT}
            onInputChange={onInputChange}
          />
        ))}
        <StickerNewItem
          data={{ description: "" }}
          onSubmit={onSubmitPOST}
          placeholder={`New sticker`}
          className="Sticker__AddNew"
          onInputChange={onInputChange}
        />
      </ul>
    </div>
  );
}
