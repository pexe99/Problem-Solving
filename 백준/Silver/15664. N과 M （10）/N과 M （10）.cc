#include <iostream>
#include <vector>
#include <set>
#include <algorithm>
using namespace std;

int N, M, number;
vector<int> result;
vector<int> input;
set<vector<int>> resultSet;

void DFS(int counter, int before) {
	if (counter == M) {
		if (resultSet.find(result) == resultSet.end()) {
			for (auto iter : result) {
				cout << iter << " ";
			}
			cout << "\n";
			resultSet.insert(result);
		}
	}
	else {
		for (int i = before + 1; i < N; i++) {
				result.push_back(input[i]);
				DFS(counter + 1, i);
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
		input.push_back(number);
	}

	sort(input.begin(), input.end());

	DFS(0, -1);

	return 0;
}