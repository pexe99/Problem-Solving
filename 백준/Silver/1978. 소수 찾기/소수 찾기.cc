#include <iostream>
#include <vector>
using namespace std;

int main() {
	vector<bool> prime(1001, true);

	int index = 2;
	prime[1] = false;
	while (index != 1001) {
		if (prime[index]) {
			int i = 2;
			while (i * index <= 1000) {
				prime[i * index] = false;
				i++;
			}
		}
		index++;
	}

	int N;
	cin >> N;

	int result = 0;
	for (int i = 0; i < N; i++) {
		int input; 
		cin >> input;
		if (prime[input]) result++;
	}
	cout << result << "\n";
}