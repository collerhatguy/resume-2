const url = "";

export default async function getData() {
  try {
    const response = await fetch(url, {
        method: "GET",
        // headers: {
        
        // },
    });
    // converting data into js object
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}