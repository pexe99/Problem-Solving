#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

long long int minLen{ 0 }, maxLen{ 0 }, midLen{ 0 }, result{ 0 };

int main() {
	int N, M;
	cin >> N >> M;

	vector<long long int> tree;
	for (int i = 0; i < N; i++) {
		long long int input;
		cin >> input;
		tree.push_back(input);
		maxLen = max(maxLen, input);
	}

	while (minLen <= maxLen) {
		midLen = (minLen + maxLen) / 2;
		long long int counter = 0;
		long long int zero = 0;
		for (int i = 0; i < N; i++) {
			counter += max((tree[i] - midLen), zero);
		}

		if (counter >= M) {
			minLen = midLen + 1;
			result = max(midLen, result);
		}
		else {
			maxLen = midLen - 1;
		}
	}
	cout << result << "\n";
}