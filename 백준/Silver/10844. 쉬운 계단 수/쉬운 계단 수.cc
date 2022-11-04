#include <iostream>
#include <vector>
using namespace std;

static long long int MOD = 1000000000;
long long int N;
vector<vector<long long int>> stairNumber(10, vector<long long int>(101, -1));

int getStairNumber(int digit, int len) {
	if (digit < 0 || digit > 9) return 0;
	int result = stairNumber[digit][len];
	if (result != -1) return result;
	else {
		stairNumber[digit][len] = (getStairNumber(digit - 1, len - 1) + getStairNumber(digit + 1, len - 1)) % MOD;
		return stairNumber[digit][len];
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	int result = 0;
	for (int i = 0; i < 10; i++) {
		stairNumber[i][1] = 1;
	}
	for (int i = 1; i < 10; i++) {
		result += getStairNumber(i, N);
		result %= MOD;
	}
	cout << result % MOD << "\n";

	return 0;
}