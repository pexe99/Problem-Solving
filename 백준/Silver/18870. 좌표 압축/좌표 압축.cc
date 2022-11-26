#include <iostream>
#include <vector>
#include <map>
using namespace std;

int N, X;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	vector<int> input;
	map<int, int> sorted;

	for (int i = 0; i < N; i++) {
		cin >> X;
		input.push_back(X);
		sorted.insert({ X, -1 });
	}

	int counter = 0;
	for (auto iter : sorted) {
		sorted[iter.first] = counter;
		counter++;
	}

	for (auto iter : input) {
		cout << sorted[iter] << " ";
	}
	cout << "\n";

	return 0;
}