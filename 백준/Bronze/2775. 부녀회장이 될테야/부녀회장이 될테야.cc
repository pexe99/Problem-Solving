#include <iostream>
#include <vector>
using namespace std;


int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<int> v(15, 0);
	vector<vector<int>> apartment(15, v);

	for (int i = 1; i < 15; i++) {
		apartment[0][i] = i;
	}

	for (int i = 1; i < 15; i++ ) {
		for (int j = 1; j < 15; j++) {
			apartment[i][j] = apartment[i][j - 1] + apartment[i - 1][j];
		}
	}

	int T;
	cin >> T;
	while (T--) {
		int k, n;
		cin >> k >> n;
		cout << apartment[k][n] << "\n";
	}
}