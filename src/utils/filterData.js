export default function filterData(data, filterCategory, keyword){
      
    const results = data.filter((data) => {
        return data.filterCategory.toLowerCase().startsWith(keyword.toLowerCase());
      });
      return results

}