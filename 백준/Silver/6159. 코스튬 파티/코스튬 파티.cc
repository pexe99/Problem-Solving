#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, S, cowSize, result;
vector<int> cow;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> S;

	for (int i = 0; i < N; i++) {
		cin >> cowSize;
		cow.push_back(cowSize);
	}

	sort(cow.begin(), cow.end());

	for (int i = 0; i < N - 1; i++) {
		for (int j = i + 1; j < N; j++) {
			if (S >= cow[i] + cow[j]) result++;
		}
	}

	cout << result << "\n";

	return 0;
}