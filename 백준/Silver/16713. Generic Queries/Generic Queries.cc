#include <iostream>
#include <vector>
using namespace std;

int N, Q, a, s, e, answer;
vector<int> XOR;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> Q;
	XOR.push_back(0);

	for (int i = 1; i <= N; i++) {
		cin >> a;
		XOR.push_back(a ^ XOR[i - 1]);
	}

	while (Q--) {
		cin >> s >> e;
		answer ^= XOR[e] ^ XOR[s - 1];
	}

	cout << answer << "\n";

	return 0;
}