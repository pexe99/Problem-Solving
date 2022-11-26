#include <iostream>
#include <vector>
#include <set>
#include <numeric>
#define INF 1e9
using namespace std;

int N, M, A, B;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;
	vector<vector<int>> graph(N, vector<int>(N, INF));

	for (int i = 0; i < N; i++) {
		graph[i][i] = 0;
	}

	for (int i = 0; i < M; i++) {
		cin >> A >> B;
		graph[A - 1][B - 1] = 1;
		graph[B - 1][A - 1] = 1;
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			for (int k = 0; k < N; k++) {
				graph[j][k] = min(graph[j][k], graph[j][i] + graph[i][k]);
			}
		}
	}

	set<pair<int, int>> sorted;

	for (int i = 0; i < N; i++) {
		sorted.insert({ accumulate(graph[i].begin(), graph[i].end(), 0), i + 1});
	}

	cout << (*sorted.begin()).second << "\n";

	return 0;
}