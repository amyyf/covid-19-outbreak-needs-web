const categoryKeys = {
  all: "all",
  food: "food",
  goods: "goods",
  services: "services",
  misc: "misc"
}
const filterKeys = {
  all: "all",
  needs: "needs",
  offers: "offers"
}

const config = {
  "categories": Object.values(categoryKeys),
  "categoryDisplayTitles": {
    [categoryKeys.all]: "All",
    [categoryKeys.food]: "Food and Basic Needs",
    [categoryKeys.goods]: "Goods for Sale or Exchange",
    [categoryKeys.services]: "Services",
    [categoryKeys.misc]: "Misc."
  },
  "categoryKeys": categoryKeys,
  "filters": Object.values(filterKeys),
  "filterDisplayTitles": {
    [filterKeys.all]: "See all",
    [filterKeys.needs]: "See needs",
    [filterKeys.offers]: "See offers"
  },
  filterKeys: filterKeys,
  "formData": {
    "height": "1479",
    "src": "https://docs.google.com/forms/d/e/1FAIpQLSc6l6ESk_hkej-impsmXuwuIxfHvUw7_t78mXD3NvNOESeDkg/viewform?embedded=true",
    "width": "640"
  },
  "offerString": "I am providing something",
  "requestString": "I am in need of something",
  "responseEmail": "marci@lowermanhattanchurch.com"
}

export default config;
