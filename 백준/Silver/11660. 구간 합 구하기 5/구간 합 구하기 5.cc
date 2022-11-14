#include <iostream>
#include <vector>
using namespace std;

int N, M, input;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;
	vector<vector<int>> grid(N, vector<int>(N, 0));

	int temp = -1;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> input;
			if (temp == -1) grid[i][j] = input;
			else grid[i][j] = temp + input;
			temp = grid[i][j];
		}
		temp = -1;
	}

	while (M--) {
		int x1, x2, y1, y2, result{ 0 };
		cin >> x1 >> y1 >> x2 >> y2;

		for (int i = x1 - 1; i <= x2 - 1; i++) {
			if (y1 == 1) result += grid[i][y2 - 1];
			else result += grid[i][y2 - 1] - grid[i][y1 - 2];
		}
		cout << result << "\n";
	}

	return 0;
}