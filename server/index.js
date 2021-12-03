const http = require("http");

const arr = [
  {
    name: "orange Juice",
    category: "Drinks",
    price: 14.99,
  },
  {
    name: "Apples",
    category: "fruits",
    price: 4.99,
  },
  {
    name: "Tomatos",
    category: "vegetables",
    price: 6.39,
  },
  {
    name: "Coffee",
    category: "Drinks",
    price: 3.15,
  },
  {
    name: "Sweet Paper",
    category: "Vegetables",
    price: 12.15,
  },
  {
    name: "Grapes",
    category: "FRUITS",
    price: 20.49,
  },
  {
    name: "Pears",
    category: "Fruits",
    price: 1.35,
  },
  {
    name: "Team",
    category: "Drinks",
    price: 0.4,
  },
];

const parseBody = async (req) => {
  let body = "";
  return new Promise((resolve) => {
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => resolve(JSON.parse(body)));
  });
};

http
  .createServer(async (req, res) => {
    try {
      const { method } = req;
      if (method.toLowerCase() === "get") {
        return res.end(JSON.stringify(arr));
      }
      if (method.toLowerCase() === "post") {
        const body = await parseBody(req);
        res.write(
          JSON.stringify({
            message: "data has fetched successful",
            data: body,
          })
        );
        return res.end();
      }
    } catch (e) {
      res.write(e.message);
      res.end();
    }
  })
  .listen(3001, () => console.log("server work"));
