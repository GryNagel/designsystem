import React from "../_snowpack/pkg/react.js";
import {LiveProvider, LivePreview, LiveEditor, LiveError} from "../_snowpack/pkg/react-live.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {KryssSirkelIkon, HusIkon} from "../_snowpack/pkg/@sb1/ffe-icons-react.js";
import PageLayout from "../components/PageLayout.js";
export default function ViewExample({exampleId, example}) {
  return /* @__PURE__ */ React.createElement(PageLayout, {
    title: example.sourceFileName
  }, /* @__PURE__ */ React.createElement(LiveProvider, {
    code: example.code,
    scope: example.scope
  }, /* @__PURE__ */ React.createElement(LivePreview, {
    className: "sb1ex-live__preview"
  }), /* @__PURE__ */ React.createElement(LiveEditor, {
    className: "sb1ex-live__editor"
  }), /* @__PURE__ */ React.createElement(LiveError, {
    className: "sb1ex-live__error"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sb1ex-aside"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "sb1ex-aside__link",
    "aria-label": "Tilbake til oversikten"
  }, /* @__PURE__ */ React.createElement(HusIkon, {
    className: "sb1ex-aside__icon"
  })), /* @__PURE__ */ React.createElement(Link, {
    to: `/${exampleId}`,
    className: "sb1ex-aside__link",
    "aria-label": "Avslutt redigering"
  }, /* @__PURE__ */ React.createElement(KryssSirkelIkon, {
    className: "sb1ex-aside__icon"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sb1ex-aside__example-id"
  }, "id: ", exampleId)));
}