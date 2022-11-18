#include <iostream>
#include <set>
using namespace std;

int N, P, result;
multiset<int> eachTime;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> P;
		eachTime.insert(P);
	}

	int cumulative = 0;
	for (auto iter : eachTime) {
		cumulative += iter;
		result += cumulative;
	}

	cout << result << "\n";

	return 0;
}