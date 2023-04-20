const arrayList = document.querySelector('#arrayList');
const setList = document.querySelector('#setList');
const arrayValues = [];
const setValues = new Set();

export function addToArray(value) {
  arrayValues.push(value);
  showArray();
}

export function addToSet(value) {
    setValues.add(value);
    showSet();
}

function showArray() {
  arrayList.innerHTML = '';
  for (const value of arrayValues) {
    const li = document.createElement('li');
    li.textContent = value;
    arrayList.appendChild(li);
  }
}

function showSet() {
  setList.innerHTML = '';
  for (const value of setValues) {
    const li = document.createElement('li');
    li.textContent = value;
    setList.appendChild(li);
  }
}
