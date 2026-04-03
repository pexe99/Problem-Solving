const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .split("\n");

const [L, string] = input;
const MOD7 = 1000000007;
const MOD9 = 1000000009;

const isSubstringAppearsTwice = (pow2, pow3, string, len) => {
  let hash2 = 0;
  let hash3 = 0;
  for (let i = 0; i < len; i++) {
    hash2 = (hash2 + string.charCodeAt(i) * pow2[len - i - 1]) % MOD7;
    hash3 = (hash3 + string.charCodeAt(i) * pow3[len - i - 1]) % MOD9;
  }

  const hashSet = new Set([(BigInt(hash2) << 32n) | BigInt(hash3)]);

  for (let i = 1; i <= string.length - len; i++) {
    hash2 = (hash2 - string.charCodeAt(i - 1) * pow2[len - 1]) % MOD7;
    hash2 = (hash2 + MOD7) % MOD7;
    hash2 = (hash2 * 2) % MOD7;
    hash2 = (hash2 + string.charCodeAt(i + len - 1)) % MOD7;

    hash3 = (hash3 - string.charCodeAt(i - 1) * pow3[len - 1]) % MOD9;
    hash3 = (hash3 + MOD9) % MOD9;
    hash3 = (hash3 * 3) % MOD9;
    hash3 = (hash3 + string.charCodeAt(i + len - 1)) % MOD9;

    const hashKey = (BigInt(hash2) << 32n) | BigInt(hash3);
    if (hashSet.has(hashKey)) return true;
    hashSet.add(hashKey);
  }

  return false;
};

const solution = (L, string) => {
  const pow2 = [1];
  const pow3 = [1];
  for (let i = 1; i <= +L; i++) {
    pow2[i] = (pow2[i - 1] * 2) % MOD7;
    pow3[i] = (pow3[i - 1] * 3) % MOD9;
  }

  let [head, tail] = [1, +L];
  while (head <= tail) {
    const mid = (head + tail) >> 1;
    if (isSubstringAppearsTwice(pow2, pow3, string, mid)) head = mid + 1;
    else tail = mid - 1;
  }

  return tail;
};

console.log(solution(L, string));
