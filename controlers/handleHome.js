const cheerio = require("cheerio");
const axios = require('axios')

const handleHome = async (req, res) => {
  const items = [];
  const link = `https://edition.cnn.com/`;

  const response = await axios(link);
  const html = response.data;
  const $ = cheerio.load(html);
  $(".card", html).each((index, value) => {
    const url = $(value).find("a").attr("href");
    const text = $(value).find(".container__headline-text").text();
    const img = $(value).find("source").attr("srcset");
    items.push({
      url: `https://edition.cnn.com${url}`,
      text,
      img,
      title: "Home",
      heading: "CNN News",
    });
  });
  res.send(items);
};

module.exports = handleHome;
