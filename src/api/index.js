const endpoint = 'https://us-central1-outbreak-needs.cloudfunctions.net/getListings';

const renameKeys = {
  'Timestamp': 'timestamp',
  'General location': 'location',
  'Type': 'type',
  'Category': 'category',
  'Details': 'details',
  'Summary': 'summary'
};

function fetchData () {
  return fetch(endpoint)
    .then(res => res.json());
}

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
    return fetchData()
      .then(res => formatData(res.data));
  }
}

export default api;
