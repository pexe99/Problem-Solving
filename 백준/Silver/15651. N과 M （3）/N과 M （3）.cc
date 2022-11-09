#include <iostream>
#include <vector>
using namespace std;

int N, M;
vector<int> result;

void DFS(int counter) {
	if (counter == M) {
		for (auto iter : result) cout << iter + 1 << " ";
		cout << "\n";
		return;
	}
	else {
		for (int i = 0; i < N; i++) {
			result.push_back(i);
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

	DFS(0);

	return 0;
}
