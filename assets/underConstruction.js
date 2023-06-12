const show = () => {
  const codes = [
    "function underConstruction() {",
    "  console.log('Website init.id is Under Construction');",
    "}",
    "",
    "const displayCodes = () => {",
    "  const codeContainer = document.getElementById('code-container');",
    "",
    "  for (let i = 0; i < codes.length; i++) {",
    "    const codeLine = document.createElement('div');",
    "    codeLine.textContent = codes[i];",
    "    codeContainer.appendChild(codeLine);",
    "  }",
    "};",
    "",
    "const showInitId = () => {",
    "  const codeLine = document.createElement('div');",
    "  codeLine.textContent = 'init.id();';",
    "  codeContainer.appendChild(codeLine);",
    "};",
    "",
    "const showPleaseComeBackLater = () => {",
    "  const codeLine = document.createElement('div');",
    "  codeLine.textContent = 'Please come back later';",
    "  codeContainer.appendChild(codeLine);",
    "};",
    "",
    "const showTranslations = () => {",
    "  const translations = {",
    "    English: 'Please come back later!',",
    "    Japanese: '少々お待ちください！',",
    "    Indonesian: 'Mohon maaf, cek lagi nanti ya!'",
    "  };",
    "",
    "  Object.entries(translations).forEach(([language, translation]) => {",
    "    const codeLine = document.createElement('div');",
    "    codeLine.textContent = `${language}: ${translation}`;",
    "    codeContainer.appendChild(codeLine);",
    "  });",
    "};",
    "",
    "const codeContainer = document.getElementById('code-container');",
    "const typingDelay = 100; // Delay between displaying each line (in milliseconds)",
    "",
    "let line = 0;",
    "",
    "const typeNextLine = () => {",
    "  if (line < codes.length) {",
    "    const codeLine = document.createElement('div');",
    "    codeLine.textContent = '';",
    "    codeContainer.appendChild(codeLine);",
    "",
    "    const codeText = codes[line];",
    "    let char = 0;",
    "",
    "    const typeChar = () => {",
    "      if (char < codeText.length) {",
    "        codeLine.textContent += codeText.charAt(char);",
    "        char++;",
    "        setTimeout(typeChar, 50); // Delay between typing each character (adjust as desired)",
    "      } else {",
    "        line++;",
    "        setTimeout(typeNextLine, typingDelay);",
    "      }",
    "    };",
    "",
    "    typeChar();",
    "  }",
    "};",
    "",
    "displayCodes();",
    "showInitId();",
    "showPleaseComeBackLater();",
    "showTranslations();",
    "underConstruction();",
  ];

  const codeContainer = document.getElementById('code-container');
  const typingDelay = 100; // Delay between displaying each line (in milliseconds)

  let line = 0;

  const typeNextLine = () => {
    if (line < codes.length) {
      const codeLine = document.createElement('div');
      codeLine.textContent = '';
      codeContainer.appendChild(codeLine);

      const codeText = codes[line];
      let char = 0;

      const typeChar = () => {
        if (char < codeText.length) {
          codeLine.textContent += codeText.charAt(char);
          char++;
          setTimeout(typeChar, 50); // Delay between typing each character (adjust as desired)
        } else {
          line++;
          setTimeout(typeNextLine, typingDelay);
        }
      };

      typeChar();
    }
  };

  setTimeout(typeNextLine, typingDelay);
};

show();
