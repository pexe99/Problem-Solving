#include <iostream>
#include <vector>
using namespace std;

int main() {
	int M, N;
	cin >> M >> N;
	vector<bool> prime(N + 1, true);
	prime[1] = false;
	int index = 2;
	while (index != N) {
		if (prime[index]) {
			for (int i = 2; i * index <= N; i++) {
				prime[i * index] = false;
			}
		}
		index++;
	}

	for (int i = M; i <= N; i++) {
		if (prime[i]) cout << i << "\n";
	}
}