#include <iostream>
#include <vector>
#include <set>
#include <algorithm>
using namespace std;

int N, M, number;
vector<int> result;
set<int> input;

void DFS(int counter) {
	if (counter == M) {
		for (auto iter : result) cout << iter << " ";
		cout << "\n";
		return;
	}
	else {
		for (auto iter : input) {
				result.push_back(iter);
				DFS(counter + 1);
				result.pop_back();
		}
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		cin >> number;
		input.insert(number);
	}

	DFS(0);

	return 0;
}