// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n    --toc-column-count: 1;\n}\n\n@media (min-width: 768px) {\n    :root {\n        --toc-column-count: 2;\n    }\n}\n\n@media (min-width: 1024px) {\n    :root {\n        --toc-column-count: 3;\n    }\n}\n\n@media (min-width: 1280px) {\n    :root {\n        --toc-column-count: 4;\n    }\n}\n\nbody {\n    margin: 0;\n    background-color: var(--ffe-farge-vann);\n    color: var(--ffe-farge-hvit);\n}\n\n.sb1ex-header {\n    background-color: var(--ffe-farge-fjell);\n    color: var(--ffe-farge-syrin);\n    padding: 16px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.sb1ex-header__headline {\n    font-family: 'SpareBank1-title-medium', arial, sans-serif;\n    font-weight: 400;\n    margin: 0;\n}\n\n.sb1ex-main {\n    background-color: var(--ffe-farge-hvit);\n    color: var(--ffe-farge-fjell);\n    padding: 18px 12px 0;\n}\n\n.sb1ex-toc {\n    column-count: var(--toc-column-count);\n}\n\n.sb1ex-toc__group {\n    break-inside: avoid;\n}\n\n.sb1ex-toc__example-list {\n    padding-bottom: 32px;\n}\n\n.sb1ex-toc__example-list-item {\n    margin-bottom: 6px;\n}\n\n.sb1ex-live__preview,\n.sb1ex-live__editor,\n.sb1ex-live__error {\n    max-width: var(--app-width);\n    margin: 0 auto;\n}\n\n.sb1ex-live__editor {\n    background-color: white;\n    margin-top: 48px;\n}\n\n.sb1ex-live__error {\n    background-color: var(--ffe-farge-villblomst);\n    margin: 0;\n    padding: 8px 16px;\n}\n\n.sb1ex-aside {\n    background-color: var(--ffe-farge-syrin);\n    padding: 12px;\n    margin: 48px -12px 0;\n}\n\n.sb1ex-aside__link {\n    display: inline-block;\n    margin-right: 12px;\n}\n\n.sb1ex-aside__icon {\n    fill: var(--ffe-farge-fjell);\n    width: 40px;\n}\n\n.sb1ex-aside__example-id {\n    text-align: right;\n}\n\n.sb1ex-toc____example-list-item a:not(h1, h2, h3, h4, h5, h6) {\n    color: var(--ffe-farge-vann);\n}\n.sb1ex-toc____example-list-item a:not(h1, h2, h3, h4, h5, h6):hover {\n    color: var(--ffe-farge-fjell);\n}\n.sb1ex-toc____example-list-item a:not(h1, h2, h3, h4, h5, h6):visited {\n    color: var(--ffe-farge-lyng);\n}\n\n@media (prefers-color-scheme: dark) {\n    body.regard-color-scheme-preference .sb1ex-main {\n        background-color: var(--ffe-black);\n    }\n\n    body.regard-color-scheme-preference a:not(h1, h2, h3, h4, h5, h6) {\n        color: var(--ffe-farge-vann-70);\n    }\n\n    body.regard-color-scheme-preference a:not(h1, h2, h3, h4, h5, h6):hover {\n        color: var(--ffe-farge-vann-30);\n    }\n\n    body.regard-color-scheme-preference a:not(h1, h2, h3, h4, h5, h6):visited {\n        color: var(--ffe-farge-lyng-70);\n    }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}