#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, u, v;


int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	vector<vector<int>> tree(N, vector<int>());

	for (int i = 0; i < N - 1; i++) {
		cin >> u >> v;
		tree[u - 1].push_back(v - 1);
		tree[v - 1].push_back(u - 1);
	}

	vector<int> parent(N, -1);
	vector<bool> visited(N, false);

	vector<int> q;
	q.push_back(0);
	while (q.size()) {
		int cur = q.back();
		visited[cur] = true;
		q.pop_back();
		for (auto iter : tree[cur]) {
			if (!visited[iter]) {
				q.push_back(iter);
				parent[iter] = cur;
			}
		}
	}

	for (int i = 1; i < N; i++) {
		cout << parent[i] + 1 << "\n";
	}

	return 0;
}