export default function demo() {
  // 1. 定义一个数组
  const arr = [1, 2, 3, 4, 5];
  // #region demo
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
  // #endregion demo
}

