import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import api from "../api/api";

export default function useAPImethod(URI) {
  const [APIelements, setAPIelement] = useState([]);

  const getAndRenderFromAPI = () => {
    api.get(URI).then(({ data }) => {
      setAPIelement(data);
      return data;
    });
  };

  useEffect(() => {
    getAndRenderFromAPI();
  }, []);

  return {
    APIelements,
  };
}

export function useBootstrapAccordion(obj) {
  const pWrapper = (obj) => {
    const tagsArr = [];
    const wrapToP = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] !== "object") {
          tagsArr.push(
            <p key={obj[key]}>
              <strong>
                {key}
                {": "}
              </strong>
              <span>
                {obj[key]} {";"}
              </span>
            </p>
          );
        } else {
          wrapToP(obj[key]);
        }
      }
    };
    wrapToP(obj);
    return tagsArr.reverse();
  };

  const accordionWrap = (obj) => {
    const keys = Object.keys(obj).filter((e) => e !== "id");
    const wrapedElements = keys.map((key, index) => {
      return (
        <Accordion.Item eventKey={index} key={key + index}>
          <Accordion.Header>{key}</Accordion.Header>
          <Accordion.Body>
            {typeof obj[key] === "object" ? pWrapper(obj[key]) : obj[key]}
          </Accordion.Body>
        </Accordion.Item>
      );
    });

    return <Accordion defaultActiveKey="0">{wrapedElements}</Accordion>;
  };

  const wrapedObject = accordionWrap(obj);

  return wrapedObject;
}
