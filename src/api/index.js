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

function formatData (data) {
  const keysArr = data[0];
  const formattedData = data.slice(1).map(listing => {
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
    return formatData(data.data);
  }
}

export default api;
