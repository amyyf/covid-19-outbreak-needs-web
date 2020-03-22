import data from './example.json';

const renameKeys = {
  "General location": 'location',
  "Type": 'type',
  "Category": 'category',
  "Details": 'details'
};

// function fetchData () {
//   return data;
// }

function formatData () {
  const keysArr = data.data.shift();
  const formattedData = data.data.map(listing => {
    return listing.reduce((obj, item, index) => {
      const key = renameKeys[keysArr[index]];
      obj[key] = item;
      return obj;
    }, {});
  });
  return formattedData;
}

const api = {
  getData () {
    return formatData();
  }
}

export default api;
