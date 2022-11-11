#include <iostream>
#include <vector>
#include <set>
#include <algorithm>
using namespace std;

int N, M, number;
vector<int> result;
vector<int> input;
vector<bool> visited;
set<vector<int>> resultSet;

void DFS(int counter) {
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
		for (int i = 0; i < N; i++) {
			if (!visited[i]) {
				result.push_back(input[i]);
				visited[i] = true;
				DFS(counter + 1);
				result.pop_back();
				visited[i] = false;
			}
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
		visited.push_back(false);
	}

	sort(input.begin(), input.end());

	DFS(0);

	return 0;
}