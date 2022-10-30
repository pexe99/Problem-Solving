#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
using namespace std;

string X, Y;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	cin >> X >> Y;
	vector<int> v(Y.length() + 1, 0);
	vector<vector<int>> result(X.length() + 1, v);

	for (int i = 0; i <= X.length(); i++) result[i][0] = i;
	for (int i = 0; i <= Y.length(); i++) result[0][i] = i;

	for (int i = 1; i <= X.length(); i++) {
		for (int j = 1; j <= Y.length(); j++) {
			if (X[i - 1] == Y[j - 1]) result[i][j] = result[i - 1][j - 1];
			else result[i][j] = min(min(result[i][j - 1], result[i - 1][j]), result[i - 1][j - 1]) + 1;
		}
	}
	cout << result[X.length()][Y.length()] << "\n";
	return 0;
}