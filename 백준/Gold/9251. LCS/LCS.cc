#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

string s1, s2;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> s1 >> s2;
	vector<vector<int>> LCS(s1.length() + 1, vector<int>(s2.length() + 1, 0));

	for (int i = 1; i <= s1.length(); i++) {
		for (int j = 1; j <= s2.length(); j++) {
			if (s1[i - 1] == s2[j - 1]) {
				LCS[i][j] = LCS[i - 1][j - 1] + 1;
			}
			else {
				LCS[i][j] = max(LCS[i - 1][j], LCS[i][j - 1]);
			}
		}
	}

	cout << LCS[s1.length()][s2.length()] << "\n";

	return 0;
}