export const generateRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(
        start.getTime() + 
        Math.random() * 
        (end.getTime() - start.getTime())
      );
  };
  
 export const generateRandomContent = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Sed do eiusmod tempor incididunt\
    ut labore et dolore magna aliqua. Ut enim ad minim\
    veniam, quis nostrud exercitation ullamco laboris\
    nisi ut aliquip ex ea commodo consequat. Duis aute\
    irure dolor in reprehenderit in voluptate velit esse\
    cillum dolore eu fugiat nulla pariatur. Excepteur sint\
    occaecat cupidatat non proident, sunt in culpa qui\
    officia deserunt mollit anim id est laborum.";
  
    let content = "";
    const wordCount = Math.floor(Math.random() * (700 - 600 + 1)) + 600;
  
    while (content.split(" ").length < wordCount) {
      content += loremIpsum + " ";
    }
  
    return content.trim();
  };
  
 export const generateRandomTitle = () => {
    const titles = [
      "Lorem Ipsum",
      "Dolor Sit Amet",
      "Consectetur Adipiscing",
      "Eiusmod Tempor",
      "Incididunt Ut Labore",
      "Dolore Magna Aliqua",
      "Minim Veniam",
      "Exercitation Ullamco",
      "Laboris Nisi",
      "Commodo Consequat"
    ];
  
    return titles[Math.floor(
      Math.random() * 
      titles.length)
    ];
  };
  
  export const generateRandomData = () => {
    const dataArray = [];
  
    for (let i = 0; i < 5; i++) { // You can adjust the number of objects in the array
      const dataObject = {
        title: generateRandomTitle(),
        content: generateRandomContent(),
        date: generateRandomDate(),
        date_modified: NaN,
      };
  
      dataArray.push(dataObject);
    }
  
    return dataArray;
  };
  
  var blogs = generateRandomData();  