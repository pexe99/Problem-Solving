#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
	int K, N;
	cin >> K >> N;
	vector<long long int> length;

	long long int result = 0;
	long long int minLen = 1;
	long long int maxLen = 0;
	for (int i = 0; i < K; i++) {
		long long int input;
		cin >> input;
		length.push_back(input);
		maxLen = max(maxLen, input);
	}

	while (minLen <= maxLen) {
		long long int midLen = (maxLen + minLen) / 2;
		int counter = 0;
		for (int i = 0; i < K; i++) {
			counter += length[i] / midLen;
		}
		if (counter >= N) {
			minLen = midLen + 1;
			if (result < midLen) result = midLen;
		}
		else {
			maxLen = midLen - 1;
		}
	}
	cout << result << "\n";
}