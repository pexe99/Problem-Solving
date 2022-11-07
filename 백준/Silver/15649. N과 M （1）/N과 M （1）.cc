#include <iostream>
#include <vector>
using namespace std;

int N, M;
vector<bool> used;
vector<int> result;

void DFS(int count) {
	if (count == M) {
		for (auto iter : result) {
			cout << iter << " ";
		}
		cout << "\n";
		return;
	}
	else {
		for (int i = 0; i < N; i++) {
			if (!used[i]) {
				result.push_back(i + 1);
				used[i] = true;
				DFS(count + 1);
				result.pop_back();
				used[i] = false;
			}
		}
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;
	
	for (int i = 1; i <= N; i++) {
		used.push_back(false);
	}

	DFS(0);

	return 0;
}