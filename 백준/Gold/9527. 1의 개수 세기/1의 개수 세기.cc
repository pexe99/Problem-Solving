#include <iostream>
#include <vector>
using namespace std;

long long A, B;
vector<long long> countOne(55, 0);

long long getOne(long long n) {
	long long result = n & 1;
	for (int i = 54; i > 0; i--) {
		if (n & (1LL << i)) {
			result += countOne[i - 1] + n - (1LL << i) + 1;
			n -= (1LL << i);
		}
	}
	return result;
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> A >> B;

	countOne[0] = 1;

	for (int i = 1; i <= 54; i++) {
		countOne[i] = 2 * countOne[i - 1] + (1LL << i);
	}

	cout << getOne(B) - getOne(A - 1) << "\n";

	return 0;
}