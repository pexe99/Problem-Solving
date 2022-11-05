#include <iostream>
#include <vector>
using namespace std;

int N, M, u, v, result;
vector<int> temp;
vector<bool> visited;
vector<vector<int>> graph;

int DFS(int start) {
	if (visited[start]) return 0;
	else {
		visited[start] = true;
		for (auto iter : graph[start]) {
			DFS(iter);
		}
		return 1;
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		graph.push_back(temp);
		visited.push_back(false);
	}

	for (int i = 0; i < M; i++) {
		cin >> u >> v;
		graph[u - 1].push_back(v - 1);
		graph[v - 1].push_back(u - 1);
	}

	for (int i = 0; i < N; i++) {
		result += DFS(i);
	}

	cout << result << "\n";
	visited.clear();
	graph.clear();
	return 0;
}