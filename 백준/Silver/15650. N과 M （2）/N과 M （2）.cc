#include <iostream>
#include <vector>
using namespace std;

int N, M;
vector<int> result;

void DFS(int counter, int before) {
	if (counter == M) {
		for (auto iter : result) cout << iter + 1 << " ";
		cout << "\n";
		return;
	}
	else {
		for (int i = before + 1; i < N; i++) {
			result.push_back(i);
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

	DFS(0, -1);

	return 0;
}