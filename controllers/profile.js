const items = [
    {
    name: "yogurt",
    price: 200,
    currency: "NGN",
    Id: 1
},
{
    name: "banana",
    price: 20,
    currency: "USD",
    Id: 2
},
{
  name: "grape",
  price: 40,
  currency: "USD",
  Id: 3
},
{
  name: "apple",
  price: 35,
  currency: "NGN",
  Id: 4
},
{
  name: "orange",
  price: 25,
  currency: "USD",
  Id: 5
},
{
  name: "pineapple",
  price: 10,
  currency: "NGN",
  Id: 6
}
]

const getProfileDataByQuery = (req, res) => {
    const { item_id } = req.query;
  
    const item = item.find((item) => {
      return item.id === parseInt(item_id);
    });
  
    if (item) {
      return res.json(item);
    } else {
      res.json({ message: "Item not found"});
    }
  };
  
  const getProfileDataByParams = (req, res) => {
    const { name } = req.params;
  
    const item = items.find((item) => {
      return item.name === name;
    });
  
    if (item) {
      return res.json(item);
    } else {
      res.json({ message: "Item not found"});
    }
  };
  
  module.exports = {
    getProfileDataByParams,
    getProfileDataByQuery
  };