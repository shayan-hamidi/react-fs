const companyLogo = `
company ASCII 
`;

const additionalMessage =
  '🔒 Company ensures secure and efficient development.';

console.log(
  `%c${companyLogo}%c\n%c${additionalMessage}`,
  `background: linear-gradient(90deg, #da4e62, #56d7f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: monospace;
    font-size: 10px;
    line-height: 1.2;`,
  'color: transparent;',
  'color: #333; font-family: sans-serif; font-size: 12px;'
);
