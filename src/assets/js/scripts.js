const data = [1, 2, 3, 4, 5, 6];
const options = {
  width: '1000px',
  height: '500px',
  color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
}
const element = document.getElementById('chart')
const xAxis = document.getElementById('x-axis')
const xNum = document.getElementById('x-num')
const yNum = document.getElementById('y-num')


const drawBarChart = function (arr, obj, el) {
  xNum.style.width = obj.width;
  element.style.width = obj.width
  yNum.style.height = obj.height
  const barWidthStr = obj.width.slice(0, obj.width.length - 2)
  const barWidth = Number(barWidthStr) / data.length
  const yData = [...data].reverse()
  console.log(barWidth)
  for (let i = 0; i < arr.length; i++){
    const barLi = document.createElement('li')
    barLi.classList.add(`bar`, `bar${i}`)
    barLi.style.backgroundColor = obj.color[i]
    barLi.style.height = `${Math.round(Math.random() * 500)}px`
    barLi.style.width = `${barWidth}px`
    xAxis.append(barLi)
    const xValues = document.createElement('li');
    xValues.textContent = data[i]
    xNum.append(xValues)
    const yValues = document.createElement("li");
    console.log(yData)
    yValues.textContent = yData[i]
    yNum.append(yValues);
  }
}


drawBarChart(data, options, element)
