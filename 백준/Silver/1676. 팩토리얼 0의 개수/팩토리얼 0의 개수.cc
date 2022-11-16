#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int N, result, countTwo, countFive;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	for (int i = 2; i <= N; i++) {
		int current = i;
		while (current % 2 == 0) {
			current /= 2;
			countTwo++;
		}
		current = i;
		while (current % 5 == 0) {
			current /= 5;
			countFive++;
		}
	}

	cout << min(countTwo, countFive) << "\n";
}