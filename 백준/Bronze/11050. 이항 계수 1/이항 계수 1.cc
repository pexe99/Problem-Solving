#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	int N, K;
	cin >> N >> K;

	int result = 1;
	
	int start = max(N - K, K);

	for (int i = start + 1; i <= N; i++) {
		result *= i;
	}

	int temp = 1;
	for (int i = 1; i <= N - start; i++) {
		temp *= i;
	}

	cout << result / temp << "\n";
}