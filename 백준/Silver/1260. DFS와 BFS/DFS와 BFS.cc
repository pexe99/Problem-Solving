#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <deque>
using namespace std;

int N, M, V, u, v;
vector<bool> visitedDFS;
vector<bool> visitedBFS;
map<int, set<int>> graph;

void DFS(int start) {
	visitedDFS[start - 1] = true;
	cout << start << " ";
	for (auto iter : graph[start]) {
		if(!visitedDFS[iter - 1]) DFS(iter);
	}
}

void BFS(int start) {
	deque<int> queue;
	visitedBFS[start - 1] = true;
	queue.push_back(start);
	while (queue.size()) {
		int current = queue.front();
		cout << current << " ";
		queue.pop_front();
		for (auto iter : graph[current]) {
			if (!visitedBFS[iter - 1]) {
				visitedBFS[iter - 1] = true;
				queue.push_back(iter);
			}
		}
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M >> V;
	for (int i = 0; i < N; i++) {
		visitedDFS.push_back(false);
		visitedBFS.push_back(false);
	}

	for (int i = 0; i < M; i++) {
		cin >> u >> v;
		graph[u].insert(v);
		graph[v].insert(u);
	}

	DFS(V);
	cout << "\n";
	BFS(V);
	cout << "\n";
	return 0;
}