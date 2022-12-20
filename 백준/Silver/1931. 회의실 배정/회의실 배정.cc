#include <iostream>
#include <set>
using namespace std;

int N, startT, endT, curEnd, result;
multiset<pair<int, int>> sorted;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> startT >> endT;
		sorted.insert({endT, startT});
	}


	for (auto iter : sorted) {
		if (curEnd <= iter.second) {
			curEnd = iter.first;
			result++;
		}
	}

	cout << result << "\n";

	return 0;
}