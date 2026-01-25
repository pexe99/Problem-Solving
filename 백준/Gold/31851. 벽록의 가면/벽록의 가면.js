const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

/*
[input]
- N: 좌표의 개수
- 다음 N개의 줄: 각 좌표 (x, y)
  각 좌표의 값은 절댓값이 10^5 이하인 정수
  어느 세 점도 한 직선 위에 놓여 있지 않으며, 모든 좌표는 서로 다름

[output]
- 내각의 크기가 180도 미만인 사각형의 개수

[category]
- 기하학
*/

const [[N], ...coordinates] = input.map((e) => e.split(" ").map(Number));

const getCombination = (array, len) => {
  const result = [];
  const combination = (comb, index) => {
    if (comb.length === len) result.push(comb);
    else {
      for (let i = index; i < array.length; i++)
        combination([...comb, array[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
};

const getArea = ([ax, ay], [bx, by], [cx, cy]) => {
  return Math.abs(ax * by + bx * cy + cx * ay - (ay * bx + by * cx + cy * ax));
};

const solution = (N, coordinates) => {
  coordinates.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return getCombination(coordinates, 4).filter(([a, b, c, d]) => {
    return (
      getArea(a, b, c) !==
        getArea(a, b, d) + getArea(b, c, d) + getArea(c, a, d) &&
      getArea(b, c, d) !==
        getArea(b, c, a) + getArea(c, d, a) + getArea(d, b, a) &&
      getArea(a, c, d) !==
        getArea(a, c, b) + getArea(c, d, b) + getArea(d, a, b) &&
      getArea(a, b, d) !==
        getArea(a, b, c) + getArea(b, d, c) + getArea(d, a, c)
    );
  }).length;
};

console.log(solution(N, coordinates));
