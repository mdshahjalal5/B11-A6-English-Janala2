const fetchData = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  return data;
};

const getValue = (id) => {
  return document.getElementById(id).value;
};
