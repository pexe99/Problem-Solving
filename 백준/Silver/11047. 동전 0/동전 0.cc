#include <iostream>
#include <deque>
using namespace std;

int N, K, A, result;
deque<int> coins;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> K;

	while (N--) {
		cin >> A;
		coins.push_front(A);
	}

	for (int i = 0; i < coins.size(); i++) {
		if (coins[i] > K) continue;
		else {
			result += K / coins[i];
			K %= coins[i];
		}
		if (K == 0) break;
	}

	cout << result << "\n";

	return 0;
}